import Image from "next/image";
import { Mail, User } from "lucide-react";

import Upload from "@public/images/upload.svg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/fitlinks/components/ui/tabs";
import { Input } from "@/fitlinks/components/ui/input";
import { Card, CardContent, CardHeader } from "@/fitlinks/components/ui/card";
import { Button } from "@/fitlinks/components/ui/button";
import { PasswordForm } from "@/features/settings/password-form";
import PageHeading from "@/features/layout/page-heading";

export default function SettingsPage() {
  return (
    <div className="space-y-4">
      <PageHeading heading={"Settings"} />

      <div className="min-h-[calc(100vh_-_160px)] w-full rounded-lg">
        <Tabs defaultValue="my-profile">
          <TabsList className="mb-5 overflow-x-auto rounded-lg bg-white shadow-sm dark:bg-black-dark">
            <div className="inline-flex gap-2.5 px-5 py-[11px] text-sm/[18px] font-semibold">
              <TabsTrigger className="leading-3 data-[state=active]:bg-black data-[state=active]:text-white" value="my-profile">
                My Profile
              </TabsTrigger>
              <TabsTrigger className="leading-3 data-[state=active]:bg-black data-[state=active]:text-white" value="password">
                Password
              </TabsTrigger>
              <TabsTrigger className="leading-3 data-[state=active]:bg-black data-[state=active]:text-white" value="billing">
                Billing
              </TabsTrigger>
              <TabsTrigger className="leading-3 data-[state=active]:bg-black data-[state=active]:text-white" value="notifications">
                Notifications
              </TabsTrigger>
            </div>
          </TabsList>
          <TabsContent className="mx-auto w-full max-w-[566px] font-medium text-black dark:text-white" value="my-profile">
            <div className="grid gap-4">
              <Card>
                <CardHeader className="space-y-1.5 rounded-t-lg border-b border-gray-300 bg-gray-100 px-5 py-4 text-base/5 font-semibold text-black dark:border-gray-700/50 dark:bg-black/30 dark:text-white">
                  <h3>Personal info</h3>
                  <p className="text-sm/tight font-medium text-gray-700 dark:text-gray-600">Update your photo and personal details.</p>
                </CardHeader>
                <CardContent>
                  <form className="space-y-5 p-4">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <div className="size-[50px] shrink-0 overflow-hidden rounded-full">
                        <Image alt="upload" className="h-full w-full object-cover" src={Upload} />
                      </div>
                      <div className="space-y-1">
                        <p className="font-semibold leading-tight">Update profile image</p>
                        <p className="text-xs/tight text-gray dark:text-gray-600">PNG or JPEG</p>
                      </div>
                      <div className="relative ml-3 cursor-pointer">
                        <Input className="absolute inset-0 h-full w-full cursor-pointer p-0 text-[0] leading-none opacity-0" type="file" />
                        <Button size={"large"} type="button" variant={"outline-general"}>
                          Upload
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-2.5">
                      <label className="font-semibold leading-tight">First name</label>
                      <div className="relative">
                        <Input className="ltr:pl-9 rtl:pr-9" placeholder="Carla" type="text" />
                        <User className="absolute top-3 size-4 ltr:left-3 rtl:right-3" />
                      </div>
                    </div>
                    <div className="space-y-2.5">
                      <label className="font-semibold leading-tight">Last name</label>
                      <div className="relative">
                        <Input className="ltr:pl-9 rtl:pr-9" placeholder="Williams" type="text" />
                        <User className="absolute top-3 size-4 ltr:left-3 rtl:right-3" />
                      </div>
                    </div>
                    <div className="space-y-2.5">
                      <label className="font-semibold leading-tight">Email address</label>
                      <div className="relative">
                        <Input className="ltr:pl-9 ltr:pr-20 rtl:pl-20 rtl:pr-9" placeholder="CarlaVWilliams@gmail.com" type="text" />
                        <Mail className="absolute top-3 size-4 ltr:left-3 rtl:right-3" />
                        <button
                          className="absolute top-0 rounded-lg bg-white p-2 font-semibold text-primary transition hover:text-black ltr:right-1 rtl:left-1 dark:bg-transparent dark:hover:text-white"
                          type="button"
                        >
                          Change
                        </button>
                      </div>
                    </div>

                    <div className="!mt-7 flex items-center justify-end gap-4">
                      <Button className="text-danger" size={"large"} variant={"outline-general"}>
                        Cancel
                      </Button>
                      <Button size={"large"} type="submit" variant={"black"}>
                        Save changes
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent className="mx-auto w-full max-w-[566px] font-medium text-black dark:text-white" value="password">
            <Card>
              <CardHeader className="space-y-1.5 rounded-t-lg border-b border-gray-300 bg-gray-100 px-5 py-4 text-base/5 font-semibold text-black dark:border-gray-700/50 dark:bg-black/30 dark:text-white">
                <h3>Update Password</h3>
                <p className="text-sm/tight font-medium text-gray-700 dark:text-gray-600">Enter your current password to make update</p>
              </CardHeader>
              <CardContent>
                <PasswordForm />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
