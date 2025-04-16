import { getI18n } from "locales/server";
import { PasswordForm } from "@/features/settings/update-password/ui/password-form";
import { EditProfileForm } from "@/features/settings/edit-profile/ui/edit-profile-form";
import PageHeading from "@/features/layout/page-heading";
import { serverRequiredUser } from "@/entities/user/model/get-server-session-user";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default async function SettingsPage() {
  const t = await getI18n();
  const user = await serverRequiredUser();
  const hasCredentialsAccount = user.accounts.some((account) => account.providerId === "credential");

  return (
    <div className="space-y-4">
      <PageHeading heading={t("settings")} />

      <div className="min-h-[calc(100vh_-_160px)] w-full rounded-lg">
        <Tabs defaultValue="my-profile">
          <TabsList className="mb-5 overflow-x-auto rounded-lg bg-white shadow-sm dark:bg-black-dark">
            <div className="inline-flex gap-2.5 px-5 py-[11px] text-sm/[18px] font-semibold">
              <TabsTrigger className="leading-3 data-[state=active]:bg-black data-[state=active]:text-white" value="my-profile">
                {t("personal_info")}
              </TabsTrigger>
              {hasCredentialsAccount && (
                <TabsTrigger className="leading-3 data-[state=active]:bg-black data-[state=active]:text-white" value="password">
                  {t("commons.password")}
                </TabsTrigger>
              )}
            </div>
          </TabsList>
          <TabsContent className="mx-auto w-full max-w-[566px] font-medium text-black dark:text-white" value="my-profile">
            <Card>
              <CardHeader className="space-y-1.5 rounded-t-lg border-b border-gray-300 bg-gray-100 px-5 py-4 text-base/5 font-semibold text-black dark:border-gray-700/50 dark:bg-black/30 dark:text-white">
                <h3>{t("personal_info")}</h3>
                <p className="text-sm/tight font-medium text-gray-700 dark:text-gray-600">{t("update_personal_info")}</p>
              </CardHeader>
              <CardContent>
                <EditProfileForm />
              </CardContent>
            </Card>
          </TabsContent>

          {hasCredentialsAccount && (
            <TabsContent className="mx-auto w-full max-w-[566px] font-medium text-black dark:text-white" value="password">
              <Card>
                <CardHeader className="space-y-1.5 rounded-t-lg border-b border-gray-300 bg-gray-100 px-5 py-4 text-base/5 font-semibold text-black dark:border-gray-700/50 dark:bg-black/30 dark:text-white">
                  <h3>{t("update_password")}</h3>
                  <p className="text-sm/tight font-medium text-gray-700 dark:text-gray-600">{t("update_password_subtitle")}</p>
                </CardHeader>
                <CardContent>
                  <PasswordForm />
                </CardContent>
              </Card>
            </TabsContent>
          )}
        </Tabs>
      </div>
    </div>
  );
}
