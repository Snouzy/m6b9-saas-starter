import { Tailwind } from "@react-email/tailwind";
import { Body, Container, Head, Hr, Html, Img, Link, Text } from "@react-email/components";

import { SiteConfig } from "@/site-config";
import { getServerUrl } from "@/lib/server-url";

import type { PropsWithChildren } from "react";

export const EmailLayout = ({ children }: PropsWithChildren) => {
  const baseUrl = getServerUrl();
  return (
    <Tailwind
      config={
        {
          // Theme can go here
        }
      }
    >
      <Html>
        <Head />
        <Body className="bg-white font-sans">
          <Container className="mx-auto bg-contain bg-bottom bg-no-repeat p-6">
            <table cellPadding={0} cellSpacing={0}>
              <tr>
                <td className="pr-2">
                  <Img
                    alt={`${SiteConfig.title}'s logo`}
                    className="inline"
                    height={32}
                    src={`${baseUrl}${SiteConfig.appIcon}`}
                    width={32}
                  />
                </td>
                <td>
                  <Text className="text-xl font-bold">{SiteConfig.title}</Text>
                </td>
              </tr>
            </table>
            {children}
            <Hr className="mt-12 border-gray-300" />
            <Img
              alt={`${SiteConfig.company.name}'s logo`}
              className="inline"
              height={32}
              src={`${baseUrl}${SiteConfig.appIcon}`}
              width={32}
            />
            <Link href={`${baseUrl}/api/emails/unsubscribe`}>Unsubscribe</Link>
            <Text className="ml-1 text-sm text-gray-500">{SiteConfig.company.name}</Text>
            <Text className="ml-1 text-sm text-gray-500">{SiteConfig.company.address}</Text>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
};
