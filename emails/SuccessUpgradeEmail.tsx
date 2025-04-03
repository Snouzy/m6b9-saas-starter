import { Preview, Section, Text } from "@react-email/components";

import { SiteConfig } from "@/site-config";

import { EmailLayout } from "./utils/EmailLayout";

export default function SuccessUpgradeEmail() {
  return (
    <EmailLayout>
      <Preview>You have successfully upgraded your account to FrontFit Links</Preview>
      <Section className="my-6">
        <Text className="text-lg leading-6">Hello,</Text>
        <Text className="text-lg leading-6">
          Great news! Your payment was successful, and you now have full access to all our premium link in bio features. Get ready to create
          your perfect link page!
        </Text>
        <Text className="text-lg leading-6">
          If you have any questions about customizing your link page or need assistance with any features, feel free to reach out to us.
          We're here to help you make the most of your link in bio experience.
        </Text>
        <Text className="text-lg leading-6">Happy linking,</Text>
      </Section>
      <Text className="text-lg leading-6">
        Best,
        <br />- {SiteConfig.maker.name} from {SiteConfig.title}
      </Text>
    </EmailLayout>
  );
}
