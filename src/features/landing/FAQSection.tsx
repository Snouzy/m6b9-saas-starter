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
    <SectionLayout className="brutal-grid-bg border-t-4 border-b-4 border-black py-16 flex max-lg:flex-col gap-10" size="lg">
      <div className="flex-1 space-y-3">
        <Typography className="text-primary font-bold tracking-widest uppercase text-sm" variant="base">
          FAQ
        </Typography>
        <Typography className="text-black text-4xl font-extrabold uppercase max-sm:text-3xl" variant="h2">
          Questions fréquentes
        </Typography>
      </div>

      <div className="flex-1">
        <Accordion collapsible type="single">
          {props.faq.map((e, i) => {
            return (
              <AccordionItem className="border-t border-b border-black" key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-lg font-mono text-black hover:underline data-[state=open]:text-primary">
                  {e.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground font-mono px-2 py-4">{e.answer}</AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </SectionLayout>
  );
};
