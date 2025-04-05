import Image from "next/image";

export const ConvertSection = () => {
  return (
    <section className="mt-6" data-aos-id-10>
      <div className="relative max-w-7xl mx-auto">
        {/* Bg */}
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-tr-[100px] mb-24 md:mb-0 border-2 border-slate-100 pointer-events-none -z-10"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-12 md:pt-20">
            {/* Section content */}
            <div className="relative max-w-xl mx-auto xl:max-w-none text-center xl:text-left flex flex-col xl:flex-row items-center">
              {/* Content */}
              <div className="w-[512px] max-w-full shrink-0 hidden xl:block">
                <div className="max-w-full shrink-0 order-2">
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
                  <Image
                    alt="Nutrition"
                    className="max-w-[700px] !relative"
                    fill
                    sizes="(max-width: 768px) 700px, (max-width: 1200px) 700px, 600px"
                    src="/images/landing/gold-eyeware.webp"
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
