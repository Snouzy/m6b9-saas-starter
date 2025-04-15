"use client";

import { useState } from "react";
import Image from "next/image";
import { Image as ImageIcon } from "lucide-react";
import { useMutation } from "@tanstack/react-query";

import { useI18n } from "locales/client";
import { toR2PublicUrl } from "@/shared/lib/storage/to-R2-public-url";
import { Input } from "@/fitlinks/components/ui/input";
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
    <div className="flex items-center gap-3">
      <div className="flex size-[50px] items-center justify-center overflow-hidden rounded-full bg-gray-200">
        {preview ? (
          <Image alt="Preview" className="h-full w-full object-cover" height={50} src={preview} width={50} />
        ) : (
          <ImageIcon className="text-gray-400" />
        )}
      </div>
      <Input
        // accept="image/png, image/jpeg"
        className="w-auto"
        disabled={isUploading}
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
    </div>
  );
}
