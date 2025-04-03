"use client";

import { Typography } from "@/components/ui/typography";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import { SectionLayout } from "./SectionLayout";

type Faq = {
  question: string;
  answer: string;
};

export type FeaturesPreviewProps = {
  faq: Faq[];
};

export const FAQSection = (props: FeaturesPreviewProps) => {
  return (
    <SectionLayout className="flex max-lg:flex-col" size="lg">
      <div className="flex-1 space-y-2">
        <Typography className="font-extrabold uppercase text-primary" variant="base">
          FAQ
        </Typography>
        <Typography className="text-5xl" variant="h2">
          Questions fréquentes
        </Typography>
      </div>
      <div className="flex-1">
        <Accordion collapsible type="single">
          {props.faq.map((e, i) => {
            return (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-lg">{e.question}</AccordionTrigger>
                <AccordionContent className="text-base"></AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </SectionLayout>
  );
};
