"use client";

import { z } from "zod";
import { useLocalStorage } from "usehooks-ts";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

import { useI18n } from "locales/client";
import { Typography } from "@/components/ui/typography";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, useZodForm } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

const LoginCredentialsFormScheme = z.object({
  email: z.string().email(),
  password: z.string().min(8).optional(),
});

type LoginCredentialsFormType = z.infer<typeof LoginCredentialsFormScheme>;

export const SignInCredentialsAndMagicLinkForm = () => {
  const t = useI18n();

  const form = useZodForm({
    schema: LoginCredentialsFormScheme,
  });
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isUsingCredentials, setIsUsingCredentials] = useLocalStorage("sign-in-with-credentials", false);

  async function onSubmit(values: LoginCredentialsFormType) {
    if (isUsingCredentials) {
      const result = await signIn("credentials", {
        email: values.email,
        password: values.password,
        callbackUrl: searchParams.get("callbackUrl") ?? undefined,
        redirect: false,
      });

      if (!result) {
        toast.error(t("error.invalid_credentials"));
      }

      if (result?.error) {
        const translated = t(`next_auth_errors.${result.error}` as keyof typeof t);
        toast.error(translated);
        return;
      }

      // TODO: handle the OK
      router.push("/dashboard");
    } else {
      await signIn("resend", {
        email: values.email,
        callbackUrl: searchParams.get("callbackUrl") ?? undefined,
      });
    }
  }

  return (
    <Form className="max-w-lg space-y-4" form={form} onSubmit={onSubmit}>
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            {isUsingCredentials ? <FormLabel>Email</FormLabel> : null}
            <FormControl>
              <Input placeholder="john@doe.com" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      {isUsingCredentials ? (
        <>
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>{t("commons.password")}</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </>
      ) : (
        <Typography
          as="button"
          className="text-sm"
          onClick={() => {
            setIsUsingCredentials(true);
          }}
          type="button"
          variant="link"
        >
          {t("use_password")}
        </Typography>
      )}

      <Button className="w-full" type="submit">
        {isUsingCredentials ? "Se connecter" : "Obtenir un lien magique ✨️"}
      </Button>

      {isUsingCredentials && (
        <Typography className="text-center text-gray-400" variant="small">
          {t("password_forgot")}{" "}
          <Typography
            as="button"
            className="text-gray-400"
            onClick={() => {
              setIsUsingCredentials(false);
            }}
            type="button"
            variant="link"
          >
            Obtenir un lien
          </Typography>
        </Typography>
      )}
    </Form>
  );
};
