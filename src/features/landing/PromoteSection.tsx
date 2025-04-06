import Image from "next/image";

export const PromoteSection = () => {
  return (
    <section className="mt-0 md:mt-20 overflow-hidden" data-aos-id-2>
      <div className="relative max-w-7xl mx-auto">
        {/* Background with Apple-inspired decorative elements */}
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-tl-[100px] mb-24 md:mb-0 bg-gradient-to-b from-slate-100 pointer-events-none -z-10"
        />

        {/* Decorative grid pattern - Apple style - MORE VISIBLE */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none -z-9"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.07) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.07) 1px, transparent 1px)
            `,
            backgroundSize: "24px 24px",
          }}
        />

        {/* Apple style decorative diagonal lines */}
        <div
          aria-hidden="true"
          className="absolute right-0 top-0 h-80 w-1/2 pointer-events-none -z-9 overflow-hidden"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              rgba(0,0,0,0.06) 0px,
              rgba(0,0,0,0.06) 1px,
              transparent 1px,
              transparent 10px
            )`,
          }}
        />

        {/* Decorative circles - Apple style - MORE VISIBLE */}
        <div
          aria-hidden="true"
          className="absolute -left-10 top-20 w-60 h-60 rounded-full border-2 border-gray-200/40 pointer-events-none -z-9"
        />
        <div
          aria-hidden="true"
          className="absolute -right-20 bottom-10 w-80 h-80 rounded-full border-2 border-gray-200/40 pointer-events-none -z-9"
        />

        {/* Additional dotted circle - Apple style */}
        <div
          aria-hidden="true"
          className="absolute right-1/3 top-1/4 w-40 h-40 rounded-full pointer-events-none -z-9"
          style={{
            border: "2px dashed rgba(0,0,0,0.1)",
          }}
        />

        {/* Gradient accent blobs - Apple style - MORE VISIBLE */}
        <div
          aria-hidden="true"
          className="absolute top-1/4 left-1/5 w-60 h-60 rounded-full bg-gradient-to-r from-primary/15 to-accent/20 blur-3xl pointer-events-none -z-9"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-1/4 right-1/5 w-80 h-80 rounded-full bg-gradient-to-r from-accent/15 to-primary/20 blur-3xl pointer-events-none -z-9"
        />

        {/* Abstract shape - Apple style */}
        <div aria-hidden="true" className="absolute top-40 right-1/2 transform rotate-45 pointer-events-none -z-9">
          <svg fill="none" height="120" viewBox="0 0 120 120" width="120" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 20C50 0 70 0 100 20C120 50 120 70 100 100C70 120 50 120 20 100C0 70 0 50 20 20Z"
              fill="none"
              stroke="rgba(0,0,0,0.1)"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div className="mx-auto px-4 sm:px-6">
          <div className="pb-6 xl:pt-12">
            {/* Section content */}
            <div className="relative xl:max-w-none text-center xl:text-left flex flex-col xl:flex-row items-center justify-center">
              {/* Content */}
              <div className="max-w-full shrink-0 relative">
                {/* Accent line - MORE VISIBLE */}
                <div aria-hidden="true" className="absolute -left-4 top-1/2 w-3 h-20 bg-accent/30 rounded-full hidden xl:block" />

                {/* Decorative dots pattern above text */}
                <div
                  aria-hidden="true"
                  className="absolute -top-8 left-20 w-20 h-6 pointer-events-none"
                  style={{
                    backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.2) 1.5px, transparent 1.5px)",
                    backgroundSize: "12px 12px",
                  }}
                />

                <p
                  className="mt-2 text-3xl leading-10 font-bold text-gray-900 sm:text-4xl max-w-xl xl:ml-20"
                  data-aos="fade-up"
                  data-aos-anchor="[data-aos-id-2]"
                  data-aos-delay="100"
                >
                  {"Obtiens plus d'engagement et de confiance "}
                  <span className="relative inline-block rotate-[-2deg]">
                    <strong className="highlight highlight-primary after:-rotate-2">instantanément ⭐️</strong>
                  </span>
                </p>
              </div>

              {/* Image */}
              <div className="w-full md:max-w-none md:ml-8 md:mt-0 mb-8 xl:mb-0">
                <div className="w-full mt-10 xl:mt-0 mr-0 xl:mr-20 relative">
                  {/* Decorative element behind image - Apple style - MORE VISIBLE */}
                  <div
                    aria-hidden="true"
                    className="absolute -inset-4 rounded-2xl border border-gray-300/50 bg-white/60 backdrop-blur-sm shadow-[0_0_25px_rgba(0,0,0,0.03)] -z-10"
                  />

                  {/* Decorative dots in corner */}
                  <div
                    aria-hidden="true"
                    className="absolute -top-6 -left-6 w-12 h-12 pointer-events-none"
                    style={{
                      backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.2) 1.5px, transparent 1.5px)",
                      backgroundSize: "8px 8px",
                    }}
                  />

                  <Image
                    alt="Suivi personnalisé"
                    blurDataURL="data:image/webp;base64,UklGRkYHAABXRUJQVlA4WAoAAAAgAAAA4AIA1QMASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggWAUAABCgAJ0BKuEC1gM+7Xa4VqmnJSOgCAEwHYlpbuF3YRtACewD32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHrAAAP7/uhSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="
                    className="max-w-[700px] !relative mx-auto"
                    fill
                    placeholder="blur"
                    sizes="(max-width: 768px) 700px, (max-width: 1200px) 700px, 544px"
                    src="/images/landing/get-potty.webp"
                  />

                  {/* Decorative dot pattern - Apple style - MORE VISIBLE */}
                  <div
                    aria-hidden="true"
                    className="absolute -bottom-8 -right-8 w-32 h-32 opacity-20 pointer-events-none"
                    style={{
                      backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.4) 2px, transparent 2px)",
                      backgroundSize: "14px 14px",
                    }}
                  />

                  {/* Apple-style corner accent */}
                  <div aria-hidden="true" className="absolute bottom-0 right-0 w-20 h-20 pointer-events-none">
                    <svg fill="none" height="80" viewBox="0 0 80 80" width="80" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0L80 80" stroke="rgba(0,0,0,0.15)" strokeWidth="2" />
                      <path d="M20 0L80 60" stroke="rgba(0,0,0,0.1)" strokeWidth="1.5" />
                      <path d="M40 0L80 40" stroke="rgba(0,0,0,0.05)" strokeWidth="1" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
