import { Link, Preview, Section, Text } from "@react-email/components";

import { SiteConfig } from "@/shared/config/site-config";

import { EmailLayout } from "./utils/EmailLayout";

export default function ResetPasswordEmail({ url }: { url: string }) {
  return (
    <EmailLayout>
      <Preview>Reset your password for your {SiteConfig.title} account</Preview>
      <Section className="my-6">
        <Text className="text-lg leading-6">Hello,</Text>
        <Text className="text-lg leading-6">You recently requested to reset your password for your {SiteConfig.title} account.</Text>
        <Text className="text-lg leading-6">
          <Link className="text-sky-500 hover:underline" href={url}>
            👉 Click here to reset your password 👈
          </Link>
        </Text>
        <Text className="text-lg leading-6">
          If you didn&apos;t request this, please ignore this email and your password will remain unchanged.
        </Text>
      </Section>
      <Section className="my-6">
        <Text className="text-lg leading-6">If the button doesn&apos;t work, you can copy and paste this URL into your browser:</Text>
        <Text className="text-lg leading-6">
          <Link className="text-sky-500 hover:underline" href={url}>
            {url}
          </Link>
        </Text>
      </Section>
      <Text className="text-lg leading-6">
        Best,
        <br />- {SiteConfig.maker.name} from {SiteConfig.title}
      </Text>
    </EmailLayout>
  );
}
