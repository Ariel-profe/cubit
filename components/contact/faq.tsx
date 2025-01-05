"use client";

import { faq } from "@/lib/constants";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { TextEffect } from "@/components/ui/text-effect";

export const Faq = () => {
  const halfLength = Math.floor(faq.length / 2);

  return (
    <section>
      <div className="container relative z-2 py-28">
        <div>
          <TextEffect per='char' preset='fade' as="h3" className="h3 max-lg:h4 max-md:h5 z-3 relative mx-auto mb-14 max-w-lg text-center text-p4 max-md:mb-11 max-sm:max-w-sm">
            La curiosidad nunca mato al gato, asi que preguntanos lo que quieras
          </TextEffect>
          <p className="body-1 max-lg:max-w-sm text-center">
            Tenes las preguntas, tenemos las respuestas
          </p>
        </div>

        <div className="faq-line_after w-0.5 h-full absolute left-[calc(50%-1px)] top-0 -z-1 bg-s2" />
      </div>

      <div className="faq-glow_before relative z-2 border-2 border-s2 bg-s1">
        <div className="container flex gap-10 max-lg:block">
          <div className="rounded-half absolute -top-10 left-[calc(50%-40px)] z-4 flex size-20 items-center justify-center border-2 border-s2 bg-s1">
            <img src="/images/faq-logo.svg" alt="logo" className="size-1/2" />
          </div>

          <div className="relative flex-1 pt-24">
            <Accordion type="single" collapsible className="w-full">
              {faq.slice(0, halfLength).map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="relative flex-1 lg:pt-24">
            <Accordion type="single" collapsible className="w-full">
              {faq.slice(halfLength).map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        <div className="faq-lin_after absolute left-[calc(50%-1px)] top-0 -z-1 h-full w-0.5 bg-s2 max-lg:hidden" />
      </div>
    </section>
  );
};
