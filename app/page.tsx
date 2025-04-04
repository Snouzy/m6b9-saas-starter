import { Footer } from "@/features/layout/Footer";
import { SectionDivider } from "@/features/landing/SectionDivider";
import { ReviewGrid } from "@/features/landing/review/ReviewGrid";
import { LandingHeader } from "@/features/landing/LandingHeader";
import { Hero } from "@/features/landing/Hero";
import { FAQSection } from "@/features/landing/FAQSection";
import { CTAImageSection } from "@/features/landing/cta/CTAImageSection";
import CardDescription from "@/features/landing/CardDescription";
import { BentoGridSection } from "@/features/landing/BentoSection";
import { EmailFormSection } from "@/features/email/EmailFormSection";

export default function HomePage() {
  return (
    <div className="relative flex h-fit flex-col bg-background text-foreground">
      <div className="mt-16"></div>
      <LandingHeader />

      <Hero />
      <CardDescription className="pb-20" />

      <CTAImageSection />

      <SectionDivider />
      <FAQSection
        faq={[
          {
            question: "What is Threader?",
            answer:
              "Threader is an innovative platform designed to help you write, schedule, and publish content to your account with the assistance of AI, enhancing your business's online presence.",
          },
          {
            question: "How does AI Content Generation work?",
            answer:
              "Our AI Content Generation feature leverages the power of artificial intelligence to create unique and engaging content for your Threads, making content creation easier and more efficient.",
          },
          {
            question: "Can I schedule my threads in advance?",
            answer:
              "Yes, with Threader, you can schedule your threads for a specific time, allowing you to maintain a consistent online presence without the need to manually post every day.",
          },
          {
            question: "What is the Now.TS project?",
            answer:
              "Now.TS is a new project announced on our platform that enables users to create professional Next.js applications in days, streamlining the development process.",
          },
          {
            question: "How can I get more followers?",
            answer:
              "To gain more followers, focus on creating content related to Next.js, as our analysis shows it's highly engaging. Utilize our research tools to understand trends and improve your content strategy.",
          },
          {
            question: "What are the benefits of posting with Threader?",
            answer:
              "Posting with Threader allows you to schedule posts, avoid daily manual postings, track your scheduled content easily, and maintain consistency in your online activity.",
          },
          {
            question: "What pricing plans does Threader offer?",
            answer:
              "Threader offers two pricing plans: THREADER FREE, perfect for tiny creators, allowing you to schedule 1 post in advance; and THREADER PREMIUM, ideal for content creators, offering unlimited scheduling, post previews, and auto-reposting features.",
          },
        ]}
      />

      <SectionDivider />
      <ReviewGrid
        reviews={[
          {
            image: "https://i.pravatar.cc/300?u=b1",
            name: "Eva",
            review:
              "Since I started using Threader, my content creation process has been streamlined. The AI suggestions are spot on, helping me to connect better with my audience. Highly recommend for anyone looking to elevate their content game.",
            role: "Content Creator",
          },
          {
            image: "https://i.pravatar.cc/300?u=b2",
            name: "Lucas",
            review:
              "Threader's scheduling feature is a lifesaver. It allows me to plan my content calendar efficiently, ensuring I never miss posting on the optimal days and times. Fantastic tool for social media managers.",
            role: "Social Media Manager",
          },
          {
            image: "https://i.pravatar.cc/300?u=b3",
            name: "Mia",
            review:
              "The analytics provided by Threader are invaluable. They've given me insights into what my audience loves, helping me double my engagement rate in just a few months.",
            role: "Digital Marketer",
          },
          {
            image: "https://i.pravatar.cc/300?u=b4",
            name: "Noah",
            review:
              "I was skeptical about AI-generated content, but Threader changed my mind. The content feels personal and has significantly increased my interaction rates.",
            role: "Blogger",
          },
          {
            image: "https://i.pravatar.cc/300?u=b5",
            name: "Isabella",
            review:
              "Threader's user interface is incredibly user-friendly. I was able to onboard my team in no time, and we've seen a marked improvement in our social media performance.",
            role: "Team Leader",
          },
          {
            image: "https://i.pravatar.cc/300?u=b6",
            name: "Oliver",
            review:
              "Auto-reposting with Threader is a feature I didn't know I needed. It's great for getting more mileage out of your best content without any extra effort.",
            role: "Freelancer",
          },
        ]}
      />

      <EmailFormSection />
      <BentoGridSection />
      <SectionDivider />
      <Footer />
    </div>
  );
}
