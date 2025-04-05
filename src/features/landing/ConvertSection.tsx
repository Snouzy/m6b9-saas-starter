import Image from "next/image";

export const ConvertSection = () => {
  return (
    <section className="mt-6 overflow-hidden" data-aos-id-10>
      <div className="relative max-w-7xl mx-auto">
        {/* Bg with enhanced Apple-style decorative elements */}
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-tr-[100px] mb-24 md:mb-0 border-2 border-slate-100 pointer-events-none -z-10"
        />

        {/* Apple-style dot grid background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none -z-9"
          style={{
            backgroundImage: "radial-gradient(rgba(0,0,0,0.07) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Apple-style decorative horizontal lines */}
        <div
          aria-hidden="true"
          className="absolute left-0 bottom-20 h-40 w-full pointer-events-none opacity-10 -z-9"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              #000 0px,
              #000 1px,
              transparent 1px,
              transparent 8px
            )`,
          }}
        />

        {/* Apple-style decorative curved line */}
        <div aria-hidden="true" className="absolute -right-20 top-1/4 pointer-events-none -z-9">
          <svg fill="none" height="200" viewBox="0 0 200 200" width="200" xmlns="http://www.w3.org/2000/svg">
            <path d="M30,150 Q50,30 150,50" fill="none" stroke="rgba(0,0,0,0.15)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>

        {/* Decorative gradient blobs - Apple style */}
        <div
          aria-hidden="true"
          className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-gradient-to-r from-accent/10 to-primary/5 blur-3xl pointer-events-none -z-9"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-0 right-0 w-60 h-60 rounded-full bg-gradient-to-l from-accent/10 to-primary/5 blur-3xl pointer-events-none -z-9"
        />

        {/* Large decorative circle - Apple style */}
        <div
          aria-hidden="true"
          className="absolute top-1/3 -right-40 w-96 h-96 rounded-full border border-gray-200/40 pointer-events-none -z-9"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-12 md:pt-20">
            {/* Section content */}
            <div className="relative max-w-xl mx-auto xl:max-w-none text-center xl:text-left flex flex-col xl:flex-row items-center">
              {/* Content */}
              <div className="w-[512px] max-w-full shrink-0 hidden xl:block">
                <div className="max-w-full shrink-0 order-2 relative">
                  {/* Decorative geometric element - Apple style */}
                  <div aria-hidden="true" className="absolute -left-10 -top-15 pointer-events-none opacity-20">
                    <svg fill="none" height="60" viewBox="0 0 60 60" width="60" xmlns="http://www.w3.org/2000/svg">
                      <rect fill="none" height="40" stroke="rgba(0,0,0,0.5)" strokeWidth="1.5" width="40" x="10" y="10" />
                      <circle cx="30" cy="30" fill="none" r="15" stroke="rgba(0,0,0,0.5)" strokeWidth="1.5" />
                    </svg>
                  </div>

                  {/* Apple-style subtle accent line */}
                  <div aria-hidden="true" className="absolute -left-6 top-0 h-full w-2 pointer-events-none">
                    <div className="h-20 w-0.5 bg-accent/30 rounded-full mt-6"></div>
                  </div>

                  <p
                    className="text-3xl leading-12 font-bold text-gray-900 sm:text-4xl"
                    data-aos="fade-up"
                    data-aos-anchor="[data-aos-id-10]"
                    data-aos-delay="100"
                  >
                    Fais parler ton image de marque
                    <span className="relative inline-block">
                      <strong className="highlight-box text-accent">immédiatement</strong> 🚀
                    </span>
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="w-full md:max-w-none md:ml-8 mt-4 md:mt-0 mb-8 xl:mb-0">
                <div className="w-full mt-10 mb-20 xl:mt-0 mr-0 xl:mr-20 relative">
                  {/* Decorative frame behind image - Apple style */}
                  <div
                    aria-hidden="true"
                    className="absolute -inset-4 rounded-xl border border-gray-200/60 bg-white/60 backdrop-blur-sm shadow-[0_0_25px_rgba(0,0,0,0.05)] -z-10"
                  />

                  {/* Diagonal line decorations - Apple style */}
                  <div aria-hidden="true" className="absolute -top-8 -right-8 w-16 h-16 pointer-events-none opacity-30">
                    <svg fill="none" height="60" viewBox="0 0 60 60" width="60" xmlns="http://www.w3.org/2000/svg">
                      <line stroke="rgba(0,0,0,0.3)" strokeWidth="1.5" x1="0" x2="60" y1="60" y2="0" />
                      <line stroke="rgba(0,0,0,0.15)" strokeWidth="1" x1="15" x2="60" y1="60" y2="15" />
                    </svg>
                  </div>

                  <Image
                    alt="Nutrition"
                    className="max-w-[700px] !relative"
                    fill
                    sizes="(max-width: 768px) 700px, (max-width: 1200px) 700px, 600px"
                    src="/images/landing/gold-eyeware.webp"
                  />

                  {/* Corner highlight - Apple style */}
                  <div aria-hidden="true" className="absolute -bottom-6 -left-6 w-12 h-12 bg-accent/5 rounded-full pointer-events-none" />

                  {/* Grid pattern decorative element - Apple style */}
                  <div
                    aria-hidden="true"
                    className="absolute bottom-4 right-4 w-20 h-20 pointer-events-none opacity-20"
                    style={{
                      backgroundImage: `
                        linear-gradient(to right, #000 1px, transparent 1px),
                        linear-gradient(to bottom, #000 1px, transparent 1px)
                      `,
                      backgroundSize: "5px 5px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
