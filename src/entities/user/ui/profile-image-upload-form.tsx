"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Camera } from "lucide-react";
import { useMutation } from "@tanstack/react-query";

import { useI18n } from "locales/client";
import { cn } from "@/shared/lib/utils";
import { toR2PublicUrl } from "@/shared/lib/storage/to-R2-public-url";
import { env } from "@/env";
import { useCurrentUser } from "@/entities/user/model/useCurrentUser";
import { brandedToast } from "@/components/ui/toast";
import { Skeleton } from "@/components/ui/skeleton";

interface UploadProfileImageParams {
  file: File;
}

interface UploadProfileImageResult {
  url: string;
}

export function useProfileImageUpload() {
  const t = useI18n();

  return useMutation<UploadProfileImageResult, Error, UploadProfileImageParams>({
    mutationFn: async ({ file }) => {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) {
        const data = await res.json();

        if (res.status === 415) {
          brandedToast({ title: t("INVALID_FILE_TYPE"), variant: "error" });
        }

        if (res.status === 413) {
          brandedToast({ title: t("FILE_TOO_LARGE"), variant: "error" });
        }

        if (res.status === 400) {
          brandedToast({ title: t("NO_FILE_UPLOADED"), variant: "error" });
        }

        if (res.status === 500) {
          brandedToast({ title: t("IMAGE_PROCESSING_ERROR"), variant: "error" });
        }

        throw new Error(data.error || t("upload_failed"));
      }

      return res.json();
    },
  });
}

export function ProfileImageUploadForm({ isDisabled }: { isDisabled: boolean }) {
  const t = useI18n();
  const [isUploading, setIsUploading] = useState(false);
  const user = useCurrentUser();
  const initialUrl = user?.image ? toR2PublicUrl(user.image, env.NEXT_PUBLIC_CLOUDFLARE_R2_PUBLIC_URL) : null;
  const [preview, setPreview] = useState<string | null>(initialUrl);
  const uploadMutation = useProfileImageUpload();

  // Nouveau : state pour le montage côté client
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleUpload = (file: File) => {
    if (isDisabled) return;
    setIsUploading(true);
    uploadMutation.mutate(
      { file },
      {
        onSuccess: () => {
          setIsUploading(false);
          brandedToast({ title: t("upload_success"), variant: "success" });
        },
        onError: (error) => {
          setPreview(initialUrl);
          setIsUploading(false);
          console.error("error", error);
        },
      },
    );
  };

  return (
    <div className="flex flex-col items-center gap-2 py-4">
      <div className="group relative">
        <div
          className={cn(
            "flex size-[72px] items-center justify-center overflow-hidden rounded-full border-2 border-gray-200 bg-gray-100 transition-opacity",
            (isUploading || isDisabled) && "opacity-60",
          )}
        >
          {!mounted ? (
            <Skeleton height={40} rounded="rounded-full" width={40} />
          ) : preview ? (
            <Image alt="Preview" className="h-full w-full object-cover" height={72} src={preview} width={72} />
          ) : (
            <Skeleton height={40} rounded="rounded-full" width={40} />
          )}
          <label
            className={cn(
              "absolute inset-0 flex cursor-pointer items-center justify-center rounded-full bg-black/40 opacity-0 transition group-hover:bg-black/40 group-hover:opacity-100",
              (isUploading || isDisabled) && "pointer-events-none",
            )}
            htmlFor="profileImage"
            tabIndex={0}
            title={t("change_profile_picture")}
          >
            <Camera className="size-7 text-white" />
            <input
              accept="image/png, image/jpeg"
              className="hidden"
              disabled={isUploading || isDisabled}
              id="profileImage"
              name="profileImage"
              onChange={(e) => {
                if (isDisabled) return;
                const file = e.target.files?.[0];
                if (file) {
                  setPreview(URL.createObjectURL(file));
                  handleUpload(file);
                }
              }}
              type="file"
            />
          </label>
          {(isUploading || isDisabled) && (
            <div className="absolute inset-0 flex items-center justify-center rounded-full bg-white/60">
              {isUploading ? <span className="h-6 w-6 animate-spin rounded-full border-2 border-gray-300 border-t-black" /> : null}
            </div>
          )}
        </div>
      </div>
      <span className="text-xs text-gray-500">{t("profile_image_hint")}</span>
    </div>
  );
}
