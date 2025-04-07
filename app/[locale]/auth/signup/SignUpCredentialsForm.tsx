"use client";

import { toast } from "sonner";
import { signIn } from "next-auth/react";
import { useMutation } from "@tanstack/react-query";

import { useI18n } from "locales/client";
import { ProviderButton } from "app/[locale]/auth/ProviderButton";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, useZodForm } from "@/components/ui/form";
import { Divider } from "@/components/ui/divider";
import { Button } from "@/components/ui/button";

import { LoginCredentialsFormScheme } from "./signup.schema";
import { signUpAction } from "./signup.action";

import type { LoginCredentialsFormType } from "./signup.schema";

export const SignUpCredentialsForm = () => {
  const t = useI18n();

  const form = useZodForm({
    schema: LoginCredentialsFormScheme,
  });

  const submitMutation = useMutation({
    mutationFn: async (values: LoginCredentialsFormType) => {
      const actionResult = await signUpAction(values);

      if (actionResult?.serverError) {
        toast.error(actionResult?.serverError, { position: "bottom-center" });
        return;
      }

      await signIn("credentials", {
        email: values.email,
        password: values.password,
        callbackUrl: `${window.location.origin}/dashboard`,
      });
    },
  });

  async function onSubmit(values: LoginCredentialsFormType) {
    if (values.password !== values.verifyPassword) {
      form.setError("verifyPassword", {
        message: "Password does not match",
      });
      return;
    }

    return submitMutation.mutateAsync(values);
  }

  return (
    <Form
      className="max-w-lg space-y-4"
      form={form}
      onSubmit={async (values) => {
        return onSubmit(values);
      }}
    >
      <div className="grid grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("commons.first_name")}</FormLabel>
              <FormControl>
                <Input placeholder="John" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("commons.last_name")}</FormLabel>
              <FormControl>
                <Input placeholder="Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>{t("commons.email")}</FormLabel>
            <FormControl>
              <Input placeholder="john@doe.com" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel>{t("commons.password")}</FormLabel>
            <FormControl>
              <Input type="password" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="verifyPassword"
        render={({ field }) => (
          <FormItem>
            <FormLabel>{t("commons.verify_password")}</FormLabel>
            <FormControl>
              <Input type="password" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <Button className="w-full" type="submit">
        {t("commons.submit")}
      </Button>

      <Divider>{t("or")}</Divider>
      <div className="flex flex-col gap-2">
        <ProviderButton action="signup" providerId="google" variant="accent" />
      </div>
    </Form>
  );
};
