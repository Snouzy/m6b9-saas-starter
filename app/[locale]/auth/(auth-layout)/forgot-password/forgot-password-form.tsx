"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";

import { useI18n } from "locales/client";
import { authClient } from "@/utils/auth-client";
import { getServerUrl } from "@/lib/server-url";
import { paths } from "@/config/paths";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

export function ForgotPasswordForm() {
  const t = useI18n();

  const forgotPasswordSchema = z.object({
    email: z.string().email(t("invalid_email")),
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);

  const form = useForm<z.infer<typeof forgotPasswordSchema>>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(formData: z.infer<typeof forgotPasswordSchema>) {
    setIsLoading(true);
    try {
      const { error } = await authClient.forgetPassword({
        email: formData.email,
        redirectTo: `${getServerUrl()}/${paths.resetPassword}`,
      });

      if (error) {
        form.setError("email", {
          type: "manual",
          message: t("error_sending_email"),
        });

        return;
      }

      setIsEmailSent(true);
    } catch (error) {
      console.error(error);
      form.setError("email", {
        type: "manual",
        message: t("generic_error"),
      });
    } finally {
      setIsLoading(false);
    }
  }

  if (isEmailSent) {
    return (
      <Alert variant="success">
        <AlertDescription>{t("password_forgot_success")}</AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">{t("password_forgot_title")}</h1>
        <p className="text-muted-foreground text-sm">{t("password_forgot_subtitle")}</p>
      </div>

      <Form form={form} onSubmit={onSubmit}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input autoComplete="email" placeholder="nom@exemple.com" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="mt-6 w-full" disabled={isLoading} type="submit">
          {isLoading ? t("sending") : t("send_me_link")}
        </Button>
      </Form>

      <div className="text-center text-sm">
        <Link className="text-primary hover:underline" href={`/${paths.signIn}`}>
          {t("back_to_login")}
        </Link>
      </div>
    </div>
  );
}
