"use client";

import { useBoolean } from "usehooks-ts";
import { toast } from "sonner";
import { Angry, Frown, Meh, SmilePlus } from "lucide-react";

import { useI18n } from "locales/client";
import { authClient } from "@/utils/auth-client";
import { cn } from "@/lib/utils";
import { InlineTooltip } from "@/components/ui/tooltip";
import { Textarea } from "@/components/ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, useZodForm } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import { ContactFeedbackSchema } from "./contact-feedback.schema";
import { contactFeedbackAction } from "./contact-feedback.action";

import type { PropsWithChildren } from "react";
import type { ContactFeedbackSchemaType } from "./contact-feedback.schema";

export type ContactFeedbackPopoverProps = PropsWithChildren<{}>;

export const ContactFeedbackPopover = (props: ContactFeedbackPopoverProps) => {
  const t = useI18n();
  const open = useBoolean();
  const { data: session } = authClient.useSession();
  const email = session?.user.email ?? "";
  const form = useZodForm({
    schema: ContactFeedbackSchema,
    defaultValues: {
      email: email,
    },
  });

  const onSubmit = async (values: ContactFeedbackSchemaType) => {
    const result = await contactFeedbackAction(values);

    if (!result) {
      toast.error("An error occurred while sending your feedback. Please try again later.");
      return;
    }

    if (result.serverError) {
      toast.error(result.serverError);
      return;
    }

    toast.success("Your feedback has been sent. Thanks you.");
    form.reset();
    open.setFalse();
  };

  return (
    <Popover onOpenChange={open.toggle} open={open.value}>
      <PopoverTrigger asChild>{props.children ? props.children : <Button variant="outline">Feedback</Button>}</PopoverTrigger>
      <PopoverContent className="p-0">
        <Form className="flex flex-col gap-4" form={form} onSubmit={async (v) => onSubmit(v)}>
          <div className="p-2">
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
          </div>
          <div className="border-secondary bg-secondary/50 flex w-full items-center justify-between border-t p-2">
            <FormField
              control={form.control}
              name="review"
              render={({ field }) => (
                <FormItem className="flex items-center gap-2 space-y-0">
                  <ReviewInput
                    onChange={(v) => {
                      field.onChange(v);
                    }}
                    value={field.value}
                  />
                </FormItem>
              )}
            />
            <Button type="submit" variant="outline">
              {t("commons.submit")}
            </Button>
          </div>
        </Form>
      </PopoverContent>
    </Popover>
  );
};

const ReviewInput = ({ onChange, value }: { onChange: (value: string) => void; value?: string }) => {
  const t = useI18n();

  const ReviewInputItems = [
    {
      value: "1",
      icon: Angry,
      tooltip: t("extremely_dissatisfied"),
    },
    {
      value: "2",
      icon: Frown,
      tooltip: t("somewhat_dissatisfied"),
    },
    {
      value: "3",
      icon: Meh,
      tooltip: t("neutral"),
    },
    {
      value: "4",
      icon: SmilePlus,
      tooltip: t("satisfied"),
    },
  ];

  return (
    <>
      {ReviewInputItems.map((item) => (
        <InlineTooltip key={item.value} title={item.tooltip}>
          <button
            className={cn("transition hover:rotate-12 hover:scale-110", {
              "-rotate-[16deg] scale-[1.2] text-primary": value === item.value,
            })}
            onClick={() => {
              onChange(item.value);
            }}
            type="button"
          >
            <item.icon size={24} />
          </button>
        </InlineTooltip>
      ))}
    </>
  );
};
