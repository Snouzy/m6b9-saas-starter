// app/[locale]/auth/(auth-layout)/reset-password/reset-password-form.tsx
"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

import { authClient } from "@/utils/auth-client";
import { paths } from "@/config/paths";
import { InputPasswordStrength } from "@/components/ui/input-password-strength";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, "Le mot de passe doit contenir au moins 8 caractères")
      .regex(/[A-Z]/, "Le mot de passe doit contenir au moins une majuscule")
      .regex(/[a-z]/, "Le mot de passe doit contenir au moins une minuscule")
      .regex(/[0-9]/, "Le mot de passe doit contenir au moins un chiffre"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Les mots de passe ne correspondent pas",
    path: ["confirmPassword"],
  });

type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;

export function ResetPasswordForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token") ?? "";

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  if (!token) {
    return (
      <Alert variant="error">
        <AlertDescription>Le lien de réinitialisation est invalide ou a expiré. Veuillez demander un nouveau lien.</AlertDescription>
      </Alert>
    );
  }

  async function onSubmit(formData: ResetPasswordFormData) {
    setIsLoading(true);
    setError(null);

    try {
      const { error } = await authClient.resetPassword({
        newPassword: formData.password,
        token,
      });

      if (error) {
        setError("Une erreur est survenue lors de la réinitialisation du mot de passe. Veuillez réessayer.");
        return;
      }

      router.push(`/${paths.signIn}?reset=success`);
    } catch (error) {
      setError("Une erreur est survenue lors de la réinitialisation du mot de passe. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Réinitialisation du mot de passe</h1>
        <p className="text-muted-foreground text-sm">Veuillez choisir un nouveau mot de passe</p>
      </div>

      {error && (
        <Alert variant="error">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <Form form={form} onSubmit={onSubmit}>
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => {
              console.log("field:", field);

              return (
                <FormItem>
                  <FormLabel>Nouveau mot de passe</FormLabel>
                  <FormControl>
                    <InputPasswordStrength {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirmer le mot de passe</FormLabel>
                <FormControl>
                  <Input autoComplete="new-password" placeholder="••••••••" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button className="mt-6 w-full" disabled={isLoading} type="submit">
          {isLoading ? "Réinitialisation en cours..." : "Réinitialiser le mot de passe"}
        </Button>
      </Form>
    </div>
  );
}
