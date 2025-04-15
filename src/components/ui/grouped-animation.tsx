import Image from "next/image";

import Youtube from "@public/icons/youtube.svg";
import Whatsapp from "@public/icons/whatsapp.svg";
import Tiktok from "@public/icons/tiktok.svg";
import Stripe from "@public/icons/stripe.svg";
import LogoI from "@public/icons/logo-i.svg";
import Google from "@public/icons/google.svg";
import GoogleSheet from "@public/icons/google-sheet.svg";
import GoogleMeet from "@public/icons/google-meet.svg";
import Calendly from "@public/icons/calendly.svg";

// Configuration des logos satellites
const SATELLITE_LOGOS = [
  {
    name: "Youtube",
    src: Youtube,
    size: 32,
    distance: 170,
    angle: 45,
    animDelay: "3s",
    animDuration: "5s",
  },
  {
    name: "GoogleMeet",
    src: GoogleMeet,
    size: 22,
    distance: 190,
    angle: 90,
    animDelay: "3.5s",
    animDuration: "5s",
  },
  {
    name: "Calendly",
    src: Calendly,
    size: 32,
    distance: 170,
    angle: 135,
    animDelay: "3.5s",
    animDuration: "4s",
  },
  {
    name: "Stripe",
    src: Stripe,
    size: 32,
    distance: 200,
    angle: 180,
    animDelay: "1.5s",
    animDuration: "4s",
  },
  {
    name: "Gmail",
    src: Google,
    size: 26,
    distance: 190,
    angle: 225,
    animDelay: "2s",
    animDuration: "4s",
  },
  {
    name: "Whatsapp",
    src: Whatsapp,
    size: 32,
    distance: 200,
    angle: 270,
    animDelay: "2.5s",
    animDuration: "4s",
  },
  {
    name: "GoogleSheet",
    src: GoogleSheet,
    size: 30,
    distance: 230,
    angle: 315,
    animDelay: "2s",
    animDuration: "4s",
  },
  {
    name: "Tiktok",
    src: Tiktok,
    size: 26,
    distance: 200,
    angle: 0,
    animDelay: "4s",
    animDuration: "4s",
  },
];

export function GroupedAnimation() {
  // Fonction pour calculer la position X selon un angle et une distance
  const getX = (angle: number, distance: number) => {
    return Math.cos((angle * Math.PI) / 180) * distance;
  };

  // Fonction pour calculer la position Y selon un angle et une distance
  const getY = (angle: number, distance: number) => {
    return Math.sin((angle * Math.PI) / 180) * distance;
  };

  // Fonction pour obtenir les coordonnées du point de départ d'une ligne selon un angle
  const getLineStartCoords = (angle: number) => {
    // Ajustement pour que la ligne parte du bord du logo central (rayon: 12px)
    const centerRadius = 12;
    return {
      x: Math.cos((angle * Math.PI) / 180) * centerRadius,
      y: Math.sin((angle * Math.PI) / 180) * centerRadius,
    };
  };

  return (
    <div className="relative">
      <div className="relative flex h-[500px] items-center justify-center">
        {/* Background patterns */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-transparent via-gray-50/30 to-transparent"></div>

        {/* Small dots pattern */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <svg
            className="fill-orange-500"
            fill="none"
            height={41}
            viewBox="0 0 164 41"
            width={164}
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx={1} cy={8} fillOpacity="0.24" r={1} />
            <circle cx={1} cy={1} fillOpacity="0.16" r={1} />
            <circle cx={1} cy={15} r={1} />
            <circle cx={1} cy={26} fillOpacity="0.64" r={1} />
            <circle cx={1} cy={33} fillOpacity="0.24" r={1} />
            <circle cx={8} cy={8} r={1} />
            <circle cx={8} cy={15} r={1} />
            <circle cx={8} cy={26} fillOpacity="0.24" r={1} />
            <circle cx={15} cy={15} fillOpacity="0.64" r={1} />
            <circle cx={15} cy={26} fillOpacity="0.16" r={1} />
            <circle cx={8} cy={33} r={1} />
            <circle cx={1} cy={40} r={1} />
            <circle
              cx={1}
              cy={1}
              fillOpacity="0.24"
              r={1}
              transform="matrix(-1 0 0 1 164 7)"
            />
            <circle
              cx={1}
              cy={1}
              fillOpacity="0.16"
              r={1}
              transform="matrix(-1 0 0 1 164 0)"
            />
            <circle cx={1} cy={1} r={1} transform="matrix(-1 0 0 1 164 14)" />
            <circle
              cx={1}
              cy={1}
              fillOpacity="0.64"
              r={1}
              transform="matrix(-1 0 0 1 164 25)"
            />
            <circle
              cx={1}
              cy={1}
              fillOpacity="0.24"
              r={1}
              transform="matrix(-1 0 0 1 164 32)"
            />
            <circle cx={1} cy={1} r={1} transform="matrix(-1 0 0 1 157 7)" />
            <circle cx={1} cy={1} r={1} transform="matrix(-1 0 0 1 157 14)" />
            <circle
              cx={1}
              cy={1}
              fillOpacity="0.24"
              r={1}
              transform="matrix(-1 0 0 1 157 25)"
            />
            <circle
              cx={1}
              cy={1}
              fillOpacity="0.64"
              r={1}
              transform="matrix(-1 0 0 1 150 14)"
            />
            <circle
              cx={1}
              cy={1}
              fillOpacity="0.16"
              r={1}
              transform="matrix(-1 0 0 1 150 25)"
            />
            <circle cx={1} cy={1} r={1} transform="matrix(-1 0 0 1 157 32)" />
            <circle cx={1} cy={1} r={1} transform="matrix(-1 0 0 1 164 39)" />
          </svg>
        </div>

        {/* Orange glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <svg
            fill="none"
            height={160}
            viewBox="0 0 432 160"
            width={432}
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_2044_9)" opacity="0.6">
              <path
                className="fill-orange-500"
                clipRule="evenodd"
                d="M80 112C62.3269 112 48 97.6731 48 80C48 62.3269 62.3269 48 80 48C97.6731 48 171 62.3269 171 80C171 97.6731 97.6731 112 80 112ZM352 112C369.673 112 384 97.6731 384 80C384 62.3269 369.673 48 352 48C334.327 48 261 62.3269 261 80C261 97.6731 334.327 112 352 112Z"
                fillRule="evenodd"
              />
            </g>
            <defs>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height={160}
                id="filter0_f_2044_9"
                width={432}
                x={0}
                y={0}
              >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  mode="normal"
                  result="shape"
                />
                <feGaussianBlur
                  result="effect1_foregroundBlur_2044_9"
                  stdDeviation={32}
                />
              </filter>
            </defs>
          </svg>
        </div>

        {/* Grid lines */}

        {/* Centre Logo */}
        <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 before:absolute before:-inset-3 before:animate-[spin_6s_linear_infinite] before:rounded-full before:border before:border-transparent before:[background:conic-gradient(from_180deg,transparent,#f97316)_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          <div>
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-xl shadow-orange-500/10 before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
              <Image
                alt="Logo Principal"
                className="relative"
                height={52}
                src={LogoI}
                width={52}
              />
            </div>
          </div>
        </div>

        {/* Connection lines and satellite logos */}
        {SATELLITE_LOGOS.map((logo, index) => {
          const x = getX(logo.angle, logo.distance);
          const y = getY(logo.angle, logo.distance);
          const start = getLineStartCoords(logo.angle);

          // Calculer la taille de l'icône
          const logoSize = index % 3 === 0 ? 20 : index % 3 === 1 ? 16 : 14;
          // Ajuster la distance pour que la ligne atteigne le bord de l'icône
          const adjustedDistance = logo.distance - logoSize / 2;

          return (
            <div key={logo.name}>
              {/* Connection line */}
              <div
                className="absolute left-1/2 top-1/2 z-10 h-[2px] origin-left"
                style={{
                  width: `${adjustedDistance}px`,
                  transform: `translate(${start.x}px, ${start.y}px) rotate(${logo.angle}deg)`,
                  background:
                    "linear-gradient(90deg, rgba(249, 115, 22, 0.9), rgba(249, 115, 22, 0.1))",
                }}
              ></div>

              {/* Satellite logo */}
              <div
                className="absolute left-1/2 top-1/2 z-20"
                style={{
                  transform: `translate(calc(${x}px - ${logoSize * 2}px), calc(${y}px - ${logoSize * 2}px))`,
                }}
              >
                <div
                  style={{
                    animation: `breath ${logo.animDuration} ease-in-out ${logo.animDelay} infinite both`,
                  }}
                >
                  <div
                    className={`flex items-center justify-center rounded-full bg-white shadow-lg shadow-orange-500/5 ${index % 3 === 0 ? "h-20 w-20" : index % 3 === 1 ? "h-16 w-16" : "h-14 w-14"} before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]`}
                  >
                    <Image
                      alt={`Logo ${logo.name}`}
                      className="relative"
                      height={logo.size}
                      src={logo.src}
                      width={logo.size}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
