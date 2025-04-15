"use client";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Mail, User } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";

import { useI18n } from "locales/client";
import { Input } from "@/fitlinks/components/ui/input";
import { Button } from "@/fitlinks/components/ui/button";
import { editProfileFormSchema, EditProfileFormSchemaType } from "@/features/settings/edit-profile/schema/edit-profile.schema";
import { updateProfileAction } from "@/features/settings/edit-profile/model/edit-profile.action";
import { ProfileImageUploadForm } from "@/entities/user/ui/profile-image-upload-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

// 1. Schéma de validation (à déplacer dans schema/ si besoin)

export function EditProfileForm() {
  const t = useI18n();
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [profileImageUrl, setProfileImageUrl] = useState<string | undefined>(undefined);
  console.log("profileImageUrl:", profileImageUrl);

  const form = useForm<EditProfileFormSchemaType>({
    resolver: zodResolver(editProfileFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      image: undefined,
    },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      form.setValue("profileImage", file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (values: EditProfileFormSchemaType) => {
    try {
      const result = await updateProfileAction({
        ...values,
        image: profileImageUrl,
      });
      if (result?.serverError) {
        toast.error(t(result.serverError as keyof typeof t), { position: "bottom-center" });
        return;
      }
      toast.success(t("profile_updated_successfully"), { position: "bottom-center" });
      form.reset();
      setImagePreview(null);
    } catch (error) {
      toast.error("Failed to update profile");
      console.error(error);
    }
  };

  return (
    <>
      <ProfileImageUploadForm onUpload={setProfileImageUrl} />

      <Form form={form} onSubmit={handleSubmit}>
        <div className="space-y-5 p-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold leading-tight">{t("commons.first_name")}</FormLabel>
                <div className="relative">
                  <FormControl>
                    <Input {...field} className="ltr:pl-9 rtl:pr-9" placeholder="Carla" type="text" />
                  </FormControl>
                  <User className="absolute top-3 size-4 ltr:left-3 rtl:right-3" />
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold leading-tight">{t("commons.last_name")}</FormLabel>
                <div className="relative">
                  <FormControl>
                    <Input {...field} className="ltr:pl-9 rtl:pr-9" placeholder="Williams" type="text" />
                  </FormControl>
                  <User className="absolute top-3 size-4 ltr:left-3 rtl:right-3" />
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold leading-tight">{t("commons.email")}</FormLabel>
                <div className="relative">
                  <FormControl>
                    <Input {...field} className="ltr:pl-9 rtl:pr-20" placeholder="CarlaVWilliams@gmail.com" type="email" />
                  </FormControl>
                  <Mail className="absolute top-3 size-4 ltr:left-3 rtl:right-3" />
                  <button
                    className="absolute top-0 rounded-lg bg-white p-2 font-semibold text-primary transition hover:text-black ltr:right-1 rtl:left-1 dark:bg-transparent dark:hover:text-white"
                    disabled
                    tabIndex={-1}
                    type="button"
                  >
                    {t("commons.change")}
                  </button>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex items-center justify-end gap-4">
            <Button
              className="text-danger"
              onClick={() => {
                form.reset();
                setImagePreview(null);
              }}
              size="large"
              type="button"
              variant="outline-general"
            >
              {t("commons.cancel")}
            </Button>
            <Button disabled={form.formState.isSubmitting} size="large" type="submit" variant="black">
              {form.formState.isSubmitting ? t("commons.saving") : t("commons.save_changes")}
            </Button>
          </div>
        </div>
      </Form>
    </>
  );
}
