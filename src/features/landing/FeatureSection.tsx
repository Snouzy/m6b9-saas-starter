"use client";

import { Typography } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";
import { DotPattern } from "@/components/svg/DotPattern";

import { SectionLayout } from "./SectionLayout";

import type { ReactNode } from "react";

export const FeaturesSection = ({ features }: { features: FeatureLineProps[] }) => {
  return (
    <SectionLayout className="relative " id="features" size="sm">
      <div className="relative flex flex-col gap-16 lg:gap-28">
        <div className="flex flex-col items-center gap-2">
          <Badge>The features you NEED.</Badge>
          <Typography className="m-auto max-w-xl text-center" variant="h2">
            More than a post schedulure, we will help you <u>grow</u>.
          </Typography>
          <Typography className="m-auto max-w-lg text-center text-base" variant="muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, consequuntur! Similique, nulla placeat in expedita omnis ab
            error eaque esse a doloremque, iusto libero eligendi, animi minus architecto. Modi, consectetur?
          </Typography>
        </div>
        {features.map((f, i) => {
          return <FeatureLine badge={f.badge} component={f.component} description={f.description} key={i} title={f.title} />;
        })}
      </div>
    </SectionLayout>
  );
};

type FeatureLineProps = {
  badge: string;
  title: string;
  description: string;
  component: ReactNode;
};

export const FeatureLine = (props: FeatureLineProps) => {
  return (
    <div className="flex items-center gap-4 odd:flex-row-reverse max-lg:flex-col">
      <div className="flex flex-1 flex-col items-start gap-2">
        <Badge color="pink">{props.badge}</Badge>
        <Typography className="" variant="h3">
          {props.title}
        </Typography>
        <Typography className="text-base" variant="muted">
          {props.description}
        </Typography>
      </div>
      <div className="w-full max-w-sm">
        <DotPattern>{props.component}</DotPattern>
      </div>
    </div>
  );
};
