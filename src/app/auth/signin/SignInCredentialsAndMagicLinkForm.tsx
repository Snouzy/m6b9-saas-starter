"use client";

import { z } from "zod";
import { useLocalStorage } from "usehooks-ts";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

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
  const form = useZodForm({
    schema: LoginCredentialsFormScheme,
  });
  const searchParams = useSearchParams();
  const [isUsingCredentials, setIsUsingCredentials] = useLocalStorage("sign-in-with-credentials", false);

  async function onSubmit(values: LoginCredentialsFormType) {
    if (isUsingCredentials) {
      await signIn("credentials", {
        email: values.email,
        password: values.password,
        callbackUrl: searchParams.get("callbackUrl") ?? undefined,
      });
    } else {
      await signIn("resend", {
        email: values.email,
        callbackUrl: searchParams.get("callbackUrl") ?? undefined,
      });
    }
  }

  return (
    <Form className="max-w-lg space-y-4" form={form} onSubmit={onSubmit}>
      <Typography variant="small">{isUsingCredentials ? "Authentificate with credentials" : "Magic link ✨"}</Typography>
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
                <FormLabel>Password</FormLabel>
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
          Use password
        </Typography>
      )}

      <Button className="w-full" type="submit">
        {isUsingCredentials ? "Login with Password" : "Login with MagicLink"}
      </Button>

      {isUsingCredentials && (
        <Typography variant="small">
          Forgot password ?{" "}
          <Typography
            as="button"
            onClick={() => {
              setIsUsingCredentials(false);
            }}
            type="button"
            variant="link"
          >
            Login with magic link
          </Typography>
        </Typography>
      )}
    </Form>
  );
};
