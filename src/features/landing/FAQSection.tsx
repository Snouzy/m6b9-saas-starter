import { FaqAccordion, FAQItem } from "@/components/ui/faq-chat-accordion";

const defaultData: FAQItem[] = [
  {
    question: "Qu'est-ce qu'une plateforme SaaS ?",
    answer:
      "Une plateforme SaaS (Software as a Service) est une application accessible en ligne, sans installation, qui vous permet d'utiliser des services ou outils directement depuis votre navigateur.",
    id: 1,
  },
  {
    question: "Comment puis-je créer un compte ?",
    answer:
      "Cliquez sur le bouton 'S'inscrire' en haut de la page d'accueil, puis suivez les instructions pour renseigner vos informations et valider votre adresse e-mail.",
    id: 2,
  },
  {
    question: "Est-ce que mes données sont sécurisées ?",
    answer:
      "Oui, la sécurité de vos données est notre priorité. Nous utilisons des protocoles de chiffrement et des sauvegardes régulières pour garantir la confidentialité et l'intégrité de vos informations.",
    id: 3,
  },
  {
    question: "Puis-je utiliser la plateforme sur mobile ?",
    answer:
      "Notre plateforme est accessible depuis n'importe quel appareil connecté à Internet, y compris les smartphones et tablettes, grâce à une interface responsive.",
    id: 4,
  },
  {
    question: "Comment contacter le support client ?",
    answer:
      "Vous pouvez nous contacter via le formulaire de contact disponible dans la section 'Support' ou par e-mail. Notre équipe vous répondra dans les plus brefs délais.",
    id: 5,
  },
  {
    question: "Y a-t-il une période d'essai gratuite ?",
    answer:
      "Oui, nous proposons une période d'essai gratuite pour vous permettre de découvrir toutes les fonctionnalités avant de souscrire à un abonnement.",
    id: 6,
  },
] as const;

export function FAQSection() {
  return (
    <section className="md:my-30 my-16 flex w-full items-center justify-center">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
          <div>
            <FaqAccordion
              answerClassName="text-md md:text-xl text-white"
              className="max-w-[700px]"
              data={defaultData}
              questionClassName="text-lg md:text-2xl text-left px-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
