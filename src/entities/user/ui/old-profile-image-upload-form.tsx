"use client";

import { Upload } from "tus-js-client";
import { toast } from "sonner";
import { useState } from "react";
import { Image as ImageIcon } from "lucide-react";

import { toR2PublicUrl } from "@/shared/lib/storage/to-R2-public-url";
import { Input } from "@/fitlinks/components/ui/input";
import { Button } from "@/fitlinks/components/ui/button";
import { env } from "@/env";
import { useCurrentUser } from "@/entities/user/model/useCurrentUser";

interface ProfileImageUploadFormProps {
  onUpload?: (url: string) => void;
  initialUrl?: string;
}

export function ProfileImageUploadForm({ onUpload, initialUrl }: ProfileImageUploadFormProps) {
  const [progress, setProgress] = useState<number>(0);
  const [isUploading, setIsUploading] = useState(false);
  const user = useCurrentUser();
  const [preview, setPreview] = useState<string | null>(
    user?.image ? toR2PublicUrl(user.image, env.NEXT_PUBLIC_CLOUDFLARE_R2_PUBLIC_URL) : null,
  );

  const handleUpload = (file: File) => {
    setIsUploading(true);
    const upload = new Upload(file, {
      endpoint: "/api/upload",
      chunkSize: 5 * 1024 * 1024, // 5MB chunks
      retryDelays: [0, 1000, 3000, 5000],
      metadata: {
        filename: file.name,
        filetype: file.type,
      },
      onProgress: (bytesUploaded, bytesTotal) => {
        const percentage = (bytesUploaded / bytesTotal) * 100.0;
        setProgress(percentage);
      },
      onError: (error) => {
        setIsUploading(false);
        toast.error("Upload failed: " + error.message);
        console.error("Upload failed:", error);
      },
      onSuccess: async (data) => {
        const body = await data.lastResponse.getBody();
        const r2Url = JSON.parse(body).url;
        console.log("r2Url:", r2Url);
        setIsUploading(false);

        toast.success("Image uploaded!");
        setPreview(toR2PublicUrl(r2Url, env.NEXT_PUBLIC_CLOUDFLARE_R2_PUBLIC_URL));
      },
    });
    upload.start();
  };

  return (
    <div className="flex items-center gap-3">
      <div className="flex size-[50px] items-center justify-center overflow-hidden rounded-full bg-gray-200">
        {preview ? <img alt="Preview" className="h-full w-full object-cover" src={preview} /> : <ImageIcon className="text-gray-400" />}
      </div>
      <Input
        accept="image/png, image/jpeg"
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
      <Button disabled size="small" type="button">
        {isUploading ? "Uploading..." : "Upload"}
      </Button>
      <div className="w-32">
        <progress className="w-full" max={100} value={progress} />
        {isUploading && <span className="text-xs">{Math.round(progress)}%</span>}
      </div>
    </div>
  );
}
