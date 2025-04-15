"use server";

import { zfd } from "zod-form-data";
import { z } from "zod";

import { uploadProfileImage } from "@/shared/lib/storage/upload-image";
import { ERROR_MESSAGES } from "@/shared/constants/errors";
import { actionClient, ActionError } from "@/shared/api/safe-actions";

const UploadProfileImageSchema = zfd.formData({
  profileImage: zfd.file(z.any()),
});

export const uploadProfileImageAction = actionClient.schema(UploadProfileImageSchema).action(async ({ parsedInput }) => {
  const { profileImage } = parsedInput;

  if (!profileImage || profileImage.size === 0) {
    throw new ActionError(ERROR_MESSAGES.NO_FILE_UPLOADED);
  }

  const url = await uploadProfileImage(profileImage);
  return { url };
});
