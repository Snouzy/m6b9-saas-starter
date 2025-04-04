"use client";

import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import { Button } from "../../components/ui/button";
import { buyButtonAction } from "./buy-button.action";

import type { ButtonProps } from "../../components/ui/button";

export type BuyButtonProps = {
  priceId: string;
} & ButtonProps;

/**
 * This is a button that will create a Stripe checkout session and redirect the user to the checkout page
 * To test the integration, you can use the component like this :
 *
 * ```tsx
 * <BuyButton priceId={env.NODE_ENV === "production" ? "real-price-id" : "dev-price-id"}>Buy now !</BuyButton>
 * ```
 *
 * @param props Button props and Stripe Price Id
 * @param props.priceId This is the Stripe price ID to use for the checkout session
 * @returns
 */
export const BuyButton = ({ priceId, ...props }: BuyButtonProps) => {
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: async () => {
      const action = await buyButtonAction({
        priceId: priceId,
      });

      if (action?.data) {
        router.push(action.data.url);
        return;
      }

      toast.error(action?.serverError ?? "Something went wrong");
    },
  });

  return <Button onClick={() => mutation.mutate()} {...props} disabled={mutation.isPending || props.disabled} />;
};
