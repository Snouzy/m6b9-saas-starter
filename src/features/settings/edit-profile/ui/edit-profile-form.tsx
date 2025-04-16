"use client";
import { useForm } from "react-hook-form";
import { Mail, User } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";

import { useI18n } from "locales/client";
import { editProfileFormSchema, EditProfileFormSchemaType } from "@/features/settings/edit-profile/schema/edit-profile.schema";
import { updateProfileAction } from "@/features/settings/edit-profile/model/edit-profile.action";
import { ProfileImageUploadForm } from "@/entities/user/ui/profile-image-upload-form";
import { useCurrentUser } from "@/entities/user/model/useCurrentUser";
import { brandedToast } from "@/components/ui/toast";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

export function EditProfileForm() {
  const t = useI18n();
  const user = useCurrentUser();
  const form = useForm<EditProfileFormSchemaType>({
    resolver: zodResolver(editProfileFormSchema),
    defaultValues: {
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email,
    },
  });

  const handleSubmit = async (values: EditProfileFormSchemaType) => {
    try {
      const result = await updateProfileAction(values);
      if (result?.serverError) {
        brandedToast({ title: t(result.serverError as keyof typeof t), variant: "error" });
        return;
      }
      brandedToast({ title: t("profile_updated_successfully"), variant: "success" });
    } catch (error) {
      brandedToast({ title: "Failed to update profile", variant: "error" });
      console.error(error);
    }
  };

  return (
    <>
      <ProfileImageUploadForm isDisabled={form.formState.isSubmitting} />

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
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex items-center justify-end gap-4">
            <Button className="text-danger" size="large" type="button" variant="outline-general">
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
