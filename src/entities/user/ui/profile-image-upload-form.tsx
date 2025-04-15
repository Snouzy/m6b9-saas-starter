"use client";

import { useState } from "react";
import Image from "next/image";
import { Image as ImageIcon, Camera } from "lucide-react";
import { useMutation } from "@tanstack/react-query";

import { useI18n } from "locales/client";
import { cn } from "@/shared/lib/utils";
import { toR2PublicUrl } from "@/shared/lib/storage/to-R2-public-url";
import { env } from "@/env";
import { useCurrentUser } from "@/entities/user/model/useCurrentUser";
import { brandedToast } from "@/components/ui/toast";

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
      console.log("res:", res);

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

export function ProfileImageUploadForm() {
  const t = useI18n();
  const [isUploading, setIsUploading] = useState(false);
  const user = useCurrentUser();
  const initialUrl = user?.image ? toR2PublicUrl(user.image, env.NEXT_PUBLIC_CLOUDFLARE_R2_PUBLIC_URL) : null;
  const [preview, setPreview] = useState<string | null>(initialUrl);
  const uploadMutation = useProfileImageUpload();

  const handleUpload = (file: File) => {
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
            isUploading && "opacity-60",
          )}
        >
          {preview ? (
            <Image alt="Preview" className="h-full w-full object-cover" height={72} src={preview} width={72} />
          ) : (
            <ImageIcon className="size-10 text-gray-600" />
          )}
          <label
            className="absolute inset-0 flex cursor-pointer items-center justify-center rounded-full bg-black/40 opacity-0 transition group-hover:bg-black/40 group-hover:opacity-100"
            htmlFor="profileImage"
            tabIndex={0}
            title={t("change_profile_picture")}
          >
            <Camera className="size-7 text-white" />
            <input
              accept="image/png, image/jpeg"
              className="hidden"
              disabled={isUploading}
              id="profileImage"
              name="profileImage"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  setPreview(URL.createObjectURL(file));
                  handleUpload(file);
                }
              }}
              type="file"
            />
          </label>
          {isUploading && (
            <div className="absolute inset-0 flex items-center justify-center rounded-full bg-white/60">
              <span className="h-6 w-6 animate-spin rounded-full border-2 border-gray-300 border-t-black" />
            </div>
          )}
        </div>
      </div>
      <span className="text-xs text-gray-500">{t("profile_image_hint")}</span>
    </div>
  );
}
