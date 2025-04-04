import React from "react";

import { Footer } from "@/features/layout/Footer";
import { NewHero } from "@/features/landing/NewHero";
import { LandingHeader } from "@/features/landing/LandingHeader";
import { BusinessCategories } from "@/features/landing/business-categories";

export default function HomePage() {
  return (
    <div className="relative flex h-fit flex-col bg-background text-foreground">
      <div className="mt-16" />
      <LandingHeader />
      <NewHero />
      <BusinessCategories />
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 font-gd-sherpa">Promoting your business is critical to your success</h2>
          <p className="text-xl text-gray-600">Share your links and products with followers using one URL.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Feature Card - Edge Eyewear */}
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <div className="mb-6">
              <img alt="Edge Eyewear product showcase" className="w-full rounded-lg" src="/images/landing/edge-eyewear.webp" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Captivate buyers with visuals</h3>
            <p className="text-gray-600">
              Let customers engage with every detail of your product. Capture their attention with up to 5 images per product and short,
              captivating videos.
            </p>
          </div>

          {/* Feature Card - Get Petty */}
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <div className="grid grid-cols-3 gap-2 mb-6">
              <img alt="Product 1" className="w-full rounded-lg" src="/images/landing/edge-eyewear.webp" />
              <img alt="Product 2" className="w-full rounded-lg" src="/images/landing/edge-eyewear.webp" />
              <img alt="Product 3" className="w-full rounded-lg" src="/images/landing/get-potty.webp" />
              <img alt="Product 4" className="w-full rounded-lg" src="/images/landing/edge-eyewear.webp" />
              <img alt="Product 5" className="w-full rounded-lg" src="/images/landing/edge-eyewear.webp" />
              <img alt="Product 6" className="w-full rounded-lg" src="/images/landing/edge-eyewear.webp" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Include links to your products</h3>
            <p className="text-gray-600">
              Link to the pages where your products are listed, including online stores, marketplaces, and more.
            </p>
          </div>
          {/* Feature Card - Social Media */}
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <div className="flex gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-pink-500" viewBox="0 0 24 24">
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24">
                  <path
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-500" viewBox="0 0 24 24">
                  <path
                    d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Get noticed with branded templates</h3>
            <p className="text-gray-600">
              Quickly start with ready-to-use templates and further customize the fonts, colors, and background images to match your style.
            </p>
          </div>

          {/* Feature Card - WhatsApp */}
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <div className="mb-6">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-green-500" viewBox="0 0 24 24">
                  <path
                    d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Enhance visibility via social media</h3>
            <p className="text-gray-600">
              Create an appealing Link in Bio page and share it across multiple social channels and platforms like Instagram, Facebook, and
              TikTok.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
