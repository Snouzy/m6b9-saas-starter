import { FaqAccordion, FAQItem } from "@/components/ui/faq-chat-accordion";

const defaultData: FAQItem[] = [
  {
    question: "Why do I need a link in bio tool?",
    answer:
      "Right now, every time you've got something new to share, you have to go to every single one of your channels to change the link in each of your bios. It's time-consuming and complicated – making it so much harder to keep everything up to date. A link in bio tool means you never have to compromise, or remove one link from your bio so you can add another. You can keep everything you want to share online in one link. When you've got a change, you only ever have to make it once.",
    id: 1,
  },
  {
    question: "Is Linktree safe to use on all of my social media profiles?",
    answer:
      "Linktree is trusted by all social platforms, and is even used on many of Facebook, Instagram and TikTok's own social media accounts! Because Linktree is the original and most popular link-in-bio tool, the linktr.ee URL is a trusted, identifiable and familiar link that audiences feel comfy and safe clicking on.",
    id: 4,
  },
  {
    question: "How can I drive more traffic to and through my Linktree?",
    answer:
      "Sharing your Linktree on every social platform you have makes it easy for your most important content to be seen and engaged with by all of your followers. You can even use QR codes to generate online traffic in offline places, and drive people to your links. Once visitors arrive on your Linktree, easy-to-understand analytics help you quickly and easily discover where they're coming from, and what they're clicking on. You can immediately see what's working and what's not and improve your Linktree on the fly with different link placement, prioritized links, subheadings, animation and more to make sure your traffic is landing exactly where you want it!",
    id: 6,
  },
  {
    question: "How many links can I have on my Linktree?",
    answer:
      "This depends on two things. If your priority is click-throughs and conversion, we recommend having 3-7 links on your Linktree at once (based on our most successful creators). Including too many options for your visitors slows down their course of action. That said: for certain creators whose priority is display, education and showcasing (e.g. a record label with a library of new releases to promote, or a management company looking to showcase their full roster of clients), including more than seven links fulfils their purpose perfectly. You can use features on Linktree to add subheadings, sections, animation and other prioritisation methods to your links – so no matter how many things you've got to share, you can drive your visitors to what's most important, first.",
    id: 7,
  },
  {
    question: "What makes Linktree better than the other link in bio options?",
    answer:
      "We have our own opinions here, of course, but the stories of the people who use Linktree matter more. Linktree invented the bio link tool in 2016, and it continues to be the world's most popular bio link to this day – with 50M+ people using it as their trusted place to share, sell and grow online. Join them on Linktree today and see for yourself!",
    id: 5,
  },
  {
    question: "Do I need a website to use Linktree?",
    answer:
      "No, you don't! Linktree can act as your very own mini-website to share, sell and grow without any of the time and effort it takes to build and maintain a regular website. You can create a design that fully reflects your personality and brand in seconds, with no knowledge, skills or experience needed. If you already have a website, that's great: you can add it to your Linktree.",
    id: 8,
  },
] as const;

export function FAQSection() {
  return (
    <section className="mt-0 md:mt-20 flex justify-center items-center w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <div>
            <FaqAccordion
              answerClassName="text-xl"
              className="max-w-[700px]"
              data={defaultData}
              questionClassName="text-2xl text-left px-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
