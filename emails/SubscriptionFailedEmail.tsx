import Link from "next/link";
import { Section, Text } from "@react-email/components";

import { getServerUrl } from "@/shared/lib/server-url";
import { SiteConfig } from "@/shared/config/site-config";

import { BaseEmailLayout } from "./utils/BaseEmailLayout";

export default function SubscribtionFailedEmail() {
  return (
    <BaseEmailLayout previewText={"Important information about your ${SiteConfig.title} account"}>
      <Section className="my-6">
        <Text className="text-lg leading-6">Hello,</Text>
        <Text className="text-lg leading-6">{"Your last payment didn't go through, so your extra features are on hold."}</Text>
        <Text className="text-lg leading-6">
          {"We've noticed an issue with your recent payment, which affects your access to our premium features."}
        </Text>
        <Text className="text-lg leading-6">
          {
            "To resolve this and continue enjoying all the benefits, simply update your payment details through the link below. It's quick and straightforward!"
          }
          straightforward!
        </Text>
        <Text className="text-lg leading-6">
          <Link className="text-sky-500 hover:underline" href={`${getServerUrl()}/account/billing`}>
            Click to Update Payment and Keep Using ${SiteConfig.title}
          </Link>
        </Text>
        <Text className="text-lg leading-6">
          {"Thank you for your prompt attention to this matter. We're here to help if you have any questions."}
        </Text>
      </Section>
      <Text className="text-lg leading-6">
        Best,
        <br />- {SiteConfig.maker.name} from {SiteConfig.title}
      </Text>
    </BaseEmailLayout>
  );
}
