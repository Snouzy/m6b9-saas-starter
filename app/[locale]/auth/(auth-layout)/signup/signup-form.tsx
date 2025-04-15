"use client";

import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import { useI18n } from "locales/client";
import { ProviderButton } from "app/[locale]/auth/ProviderButton";
import { signUpAction } from "app/[locale]/auth/(auth-layout)/signup/signup.action";
import { paths } from "@/config/paths";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, useZodForm } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import { signUpSchema } from "./signup.schema";

import type { SignUpSchema } from "./signup.schema";

export const SignUpForm = () => {
  const t = useI18n();
  const router = useRouter();

  const form = useZodForm({
    schema: signUpSchema,
  });

  const submitMutation = useMutation({
    mutationFn: async (values: SignUpSchema) => {
      const actionResult = await signUpAction(values);

      if (actionResult?.serverError) {
        toast.error(t(actionResult?.serverError as keyof typeof t), { position: "bottom-center" });
        return;
      }

      router.push(`/${paths.verifyEmail}`);
    },
  });

  async function onSubmit(values: SignUpSchema) {
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

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background text-muted-foreground px-2">{t("or")}</span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <ProviderButton action="signup" providerId="google" variant="default" />
      </div>
    </Form>
  );
};
