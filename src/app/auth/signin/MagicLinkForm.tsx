import { z } from "zod";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import { getServerUrl } from "@/lib/server-url";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage, useZodForm } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

const FormSchema = z.object({
  email: z.string(),
});

export const MagicLinkForm = () => {
  const form = useZodForm({
    schema: FormSchema,
  });
  const searchParams = useSearchParams();
  const emailSignInMutation = useMutation({
    mutationFn: async (email: string) => {
      await signIn("resend", {
        callbackUrl: searchParams.get("callbackUrl") ?? `${getServerUrl()}/`,
        redirect: true,
        email,
      });
    },
  });

  return (
    <>
      <Form
        className="flex w-full items-center gap-2"
        form={form}
        onSubmit={async (values) => {
          await emailSignInMutation.mutateAsync(values.email);
        }}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl className="w-full">
                <Input className="w-full" placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button size="sm" type="submit">
          Sign in
        </Button>
      </Form>
    </>
  );
};
