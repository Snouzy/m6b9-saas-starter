"use client";

import { toast } from "sonner";
import { useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";

import { SiteConfig } from "@/shared/config/site-config";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, useZodForm } from "@/components/ui/form";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { ContactSupportSchema } from "./contact-support.schema";
import { contactSupportAction } from "./contact-support.action";

import type { PropsWithChildren } from "react";
import type { ContactSupportSchemaType } from "./contact-support.schema";

export type ContactSupportDialogProps = PropsWithChildren<{
  email?: string;
}>;

export const ContactSupportDialog = (props: ContactSupportDialogProps) => {
  const [open, setOpen] = useState(false);
  const session = useSession();
  const email = session.data?.user?.email ?? "";
  const form = useZodForm({
    schema: ContactSupportSchema,
    defaultValues: {
      email: email,
    },
  });

  const onSubmit = async (values: ContactSupportSchemaType) => {
    const action = await contactSupportAction(values);

    if (!action || !action.data) {
      toast.error(action?.serverError ?? "An error occurred while sending your message.");
      return;
    }

    toast.success("Your message has been sent.");
    form.reset();
    setOpen(false);
  };

  return (
    <Dialog onOpenChange={(v) => setOpen(v)} open={open}>
      <DialogTrigger>{props.children ? props.children : <Button variant="outline">Contact support</Button>}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Contact Support</DialogTitle>
          <DialogDescription>
            Fill the form bellow or send an email to{" "}
            <Link className="text-primary" href={`mailto:${SiteConfig.email.contact}`}>
              {SiteConfig.email.contact}
            </Link>
            .
          </DialogDescription>
        </DialogHeader>
        <Form className="flex flex-col gap-4" form={form} onSubmit={async (v) => onSubmit(v)}>
          {email ? null : (
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Send</Button>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
