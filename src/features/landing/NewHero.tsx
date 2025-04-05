import Link from "next/link";
import Image from "next/image";

import iPhone from "@public/images/iphone.png";
import Avatar04 from "@public/images/avatar-04.jpg";
import Avatar03 from "@public/images/avatar-03.jpg";
import Avatar02 from "@public/images/avatar-02.jpg";
import Avatar01 from "@public/images/avatar-01.jpg";

export function NewHero() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-16 pb-12 md:pt-40 md:pb-20">
          {/* Content */}
          <div className="relative max-w-xl mx-auto md:max-w-none text-center md:text-left flex flex-col md:flex-row">
            {/* Background */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-br from-primary to-primary rounded-3xl -mx-20 overflow-hidden mb-12 mt-0 md:mb-0"
            >
              {/* Illustration */}
              <div className="absolute -top-16 left-1/2 -translate-x-1/3 md:-translate-x-1/2 pointer-events-none z-0 blur-2xl">
                <svg height="1327" width="2106" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <filter filterUnits="objectBoundingBox" height="131.3%" id="hi-a" width="133.3%" x="-16.7%" y="-15.6%">
                      <feGaussianBlur in="SourceGraphic" stdDeviation="50" />
                    </filter>
                    <filter filterUnits="objectBoundingBox" height="131.3%" id="hi-b" width="133.3%" x="-16.7%" y="-15.6%">
                      <feGaussianBlur in="SourceGraphic" stdDeviation="50" />
                    </filter>
                    <filter filterUnits="objectBoundingBox" height="145%" id="hi-c" width="159.9%" x="-29.9%" y="-22.5%">
                      <feGaussianBlur in="SourceGraphic" stdDeviation="50" />
                    </filter>
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <path
                      d="M1732.164 1753.257c80.96 185.845 373.836-53.295 373.836-266.942S1505.228 860 1291.507 860s40.54 412.668 40.54 626.315c0 213.647 319.156 81.096 400.117 266.942Z"
                      fill="#fb734a"
                      fillOpacity=".44"
                      filter="url(#hi-b)"
                      transform="translate(0 -605)"
                    />
                  </g>
                </svg>
              </div>
            </div>

            {/* Content */}
            <div className="md:w-[640px] py-12 md:py-20 md:min-h-[450px] z-10">
              {/* Copy */}
              <h1 className="h1 font-hkgrotesk text-slate-100 mb-6" data-aos="fade-right" data-aos-delay="100">
                Convertis tes prospects en clients depuis{" "}
                <span className="font-permanent-marker text-accent font-normal whitespace-nowrap">
                  ta{" "}
                  <span className="inline-flex relative">
                    <svg
                      className="absolute right-0 top-full mt-1 max-w-none"
                      height="9"
                      viewBox="0 0 135 9"
                      width="135"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="fill-white"
                        d="M36.54 1.016C40.01.912 43.39.78 46.95.712 50.51.644 54.071.567 57.81.566c2.744.002 5.018-.162 7.897-.113 9.89.085 20.486.459 31.646 1.116 2.484.151 4.835.242 7.296.39 2.461.147 4.924.282 7.34.413 1.528.069 3.186.202 4.684.31a187 187 0 0 1 4.89.34c3.416.326 6.937.738 10.5 1.23 2.316.32 2.482.762 1.474 1.152-1.082.485-3.3.708-6.3.635-.705-.026-1.39-.039-2.117-.076l-2.202-.137-4.43-.268a899.607 899.607 0 0 1-8.75-.477c-2.953-.174-5.754-.262-8.71-.427-2.955-.165-5.803-.257-8.829-.424-1.786-.084-3.509-.137-5.156-.16-1.697-.039-3.396-.07-5.027-.081l-9.497.059c-6.873.071-13.98.132-20.388.403-4.089.123-7.886.344-11.683.565l-8.169.637c-2.596.256-5.236.496-7.537.828-1.768.261-3.332.576-4.873.895-1.541.319-2.877.683-4.575.95-.775.112-1.367.265-2.142.376-2.903.406-4.781.312-8.094-.282a79.95 79.95 0 0 1-2.301-.412C.465 7.541-.327 6.866.558 6.205c.714-.471 1.384-.971 2.398-1.395 1.013-.424 2.483-.741 3.838-1.08 1.355-.34 3.28-.546 5.025-.802 1.744-.256 3.69-.446 5.594-.66C23.24 1.688 29.49 1.233 36.13.904l.408.112Z"
                        fillRule="nonzero"
                        opacity=".32"
                      />
                    </svg>
                    bio
                  </span>
                  <span className="text-slate-100">.</span>
                </span>
              </h1>
              <p className="text-lg text-slate-400 mb-8" data-aos="fade-right" data-aos-delay="200">
                Un seul lien pour mettre en lumière tes conseils, tes créations, ton expertise.
              </p>
              {/* Buttons */}
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <div>
                  <Link className="btn text-white bg-blue-500 hover:bg-blue-600 group shadow-xs" href="/subscribe">
                    {"Je m'inscris pour 0€"}{" "}
                  </Link>
                  <p className="text-xs text-center text-slate-400 mt-1" data-aos="fade-right" data-aos-delay="200">
                    et sans carte.
                  </p>
                </div>
                <div className="sm:flex sm:items-start sm:justify-center space-y-2 sm:space-y-0 sm:space-x-3">
                  <div className="inline-flex -space-x-3 -ml-0.5">
                    <Image
                      alt="Avatar 01"
                      className="rounded-full border-2 border-slate-800 box-content"
                      height={28}
                      src={Avatar01}
                      width={28}
                    />
                    <Image
                      alt="Avatar 02"
                      className="rounded-full border-2 border-slate-800 box-content"
                      height={28}
                      src={Avatar02}
                      width={28}
                    />
                    <Image
                      alt="Avatar 03"
                      className="rounded-full border-2 border-slate-800 box-content"
                      height={28}
                      src={Avatar03}
                      width={28}
                    />
                    <Image
                      alt="Avatar 04"
                      className="rounded-full border-2 border-slate-800 box-content"
                      height={28}
                      src={Avatar04}
                      width={28}
                    />
                  </div>
                  <div className="text-xs text-slate-500 font-medium">+120K</div>
                </div>
              </div>
              {/* Press logos */}
              {/* <div className="max-w-xs mx-auto sm:max-w-none" data-aos="fade-right" data-aos-delay="400">
                <div className="inline-flex flex-wrap items-center justify-center -my-2 -mx-4 md:-mx-6">
                  <div className="w-1/2 sm:w-auto flex justify-center py-2 px-4 md:px-6">
                    <Image src={Client01} width={82} alt="Client 01" />
                  </div>
                  <div className="w-1/2 sm:w-auto flex justify-center py-2 px-4 md:px-6">
                    <Image src={Client02} width={97} alt="Client 02" />
                  </div>
                  <div className="w-1/2 sm:w-auto flex justify-center py-2 px-4 md:px-6">
                    <Image src={Client03} width={113} alt="Client 03" />
                  </div>
                  <div className="w-1/2 sm:w-auto flex justify-center py-2 px-4 md:px-6 sm:-mt-2">
                    <Image src={Client04} width={82} alt="Client 04" />
                  </div>
                </div>
              </div> */}
            </div>

            {/* Image */}
            <div className="max-w-sm mx-auto md:max-w-none md:absolute md:left-[40rem] md:top-1/2 md:-translate-y-1/2 md:ml-8 lg:ml-20 xl:ml-32 z-10">
              <div data-aos="fade-left" data-aos-duration="1100">
                <Image alt="iPhone" className="md:max-w-none" height={601} priority src={iPhone} width={298} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
