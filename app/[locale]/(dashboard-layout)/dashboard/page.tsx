import { TrendingDown, TrendingUp } from "lucide-react";

import { Layout, LayoutContent } from "@/features/page/layout";
import PageHeading from "@/features/layout/page-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// interface PageProps {
//   params: {
//     locale: string;
//   };
// }

export default async function RoutePage() {
  return (
    <Layout>
      <LayoutContent>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <div className="relative space-y-4">
              <PageHeading heading="It's meeeee snouzyyyyyyy" />

              <div className="min-h-[calc(100vh_-_160px)] w-full space-y-4">
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  <Card className="relative rounded-b-none shadow-[0_8px_20px_0_rgba(124,58,237,0.08)]">
                    <div className="space-y-3.5 p-5 font-semibold">
                      <div className="flex items-center justify-between">
                        <div className="inline-flex items-center gap-1.5">
                          <TrendingUp className="size-6" />
                          <h3 className="leading-tight">Bitcoin</h3>
                        </div>
                        <span className="text-xs/tight font-medium">BTC</span>
                      </div>
                      <div className="flex items-center justify-between gap-2.5">
                        <h4 className="text-xl/6 font-bold text-black dark:text-white">$293.01</h4>
                        <Badge className="rounded-lg font-semibold" size={"small"} variant={"green"}>
                          <TrendingUp />
                          78.88%
                        </Badge>
                      </div>
                    </div>
                    <span className="absolute -bottom-0 h-px w-full bg-gradient-to-r from-[#7C3AED] to-[#A78BFA]"></span>
                  </Card>
                  <Card className="relative rounded-b-none shadow-[0_8px_20px_0_rgba(34,197,94,0.08)]">
                    <div className="space-y-3.5 p-5 font-semibold">
                      <div className="flex items-center justify-between">
                        <div className="inline-flex items-center gap-1.5">
                          <TrendingDown className="size-6" />
                          <h3 className="leading-tight">Ethereum</h3>
                        </div>
                        <span className="text-xs/tight font-medium">ETH</span>
                      </div>
                      <div className="flex items-center justify-between gap-2.5">
                        <h4 className="text-xl/6 font-bold text-black dark:text-white">$450.54</h4>
                        <Badge className="rounded-lg font-semibold" size={"small"} variant={"green"}>
                          <TrendingUp />
                          2.15%
                        </Badge>
                      </div>
                    </div>
                    <span className="absolute -bottom-0 h-px w-full bg-success"></span>
                  </Card>
                  <Card className="relative rounded-b-none shadow-[0_8px_20px_0_rgba(239,68,68,0.08)]">
                    <div className="space-y-3.5 p-5 font-semibold">
                      <div className="flex items-center justify-between">
                        <div className="inline-flex items-center gap-1.5">
                          <TrendingDown className="size-6" />
                          <h3 className="leading-tight">Tether</h3>
                        </div>
                        <span className="text-xs/tight font-medium">USDT</span>
                      </div>
                      <div className="flex items-center justify-between gap-2.5">
                        <h4 className="text-xl/6 font-bold text-black dark:text-white">$169.43</h4>
                        <Badge className="rounded-lg font-semibold" size={"small"} variant={"red"}>
                          <TrendingDown />
                          47.10%
                        </Badge>
                      </div>
                    </div>
                    <span className="absolute -bottom-0 h-px w-full bg-danger"></span>
                  </Card>
                  <Card className="relative rounded-b-none shadow-[0_8px_20px_0_rgba(234,179,8,0.08)]">
                    <div className="space-y-3.5 p-5 font-semibold">
                      <div className="flex items-center justify-between">
                        <div className="inline-flex items-center gap-1.5">
                          <TrendingDown className="size-6" />
                          <h3 className="leading-tight">Binance</h3>
                        </div>
                        <span className="text-xs/tight font-medium">BNB</span>
                      </div>
                      <div className="flex items-center justify-between gap-2.5">
                        <h4 className="text-xl/6 font-bold text-black dark:text-white">$275.43</h4>
                        <Badge className="rounded-lg font-semibold" size={"small"} variant={"green"}>
                          <TrendingUp />
                          78.88%
                        </Badge>
                      </div>
                    </div>
                    <span className="absolute -bottom-0 h-px w-full bg-warning"></span>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutContent>
    </Layout>
  );
}
