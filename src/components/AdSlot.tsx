"use client";

import { useEffect } from "react";
import Script from "next/script";

const ADSENSE_ID = process.env.NEXT_PUBLIC_ADSENSE_ID;

interface AdSlotProps {
  slot: string;
  format?: "auto" | "rectangle" | "horizontal" | "vertical";
  className?: string;
}

export default function AdSlot({ slot, format = "auto", className = "" }: AdSlotProps) {
  useEffect(() => {
    try {
      if (typeof window !== "undefined" && window.adsbygoogle) {
        window.adsbygoogle.push({});
      }
    } catch {
      console.error("AdSense error");
    }
  }, []);

  if (!ADSENSE_ID) {
    return (
      <div className={`glass-card flex items-center justify-center text-gray-400 text-sm py-8 ${className}`}>
        <div className="text-center">
          <span className="text-2xl block mb-1">📢</span>
          <span>광고 영역</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_ID}`}
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <ins
        className={`adsbygoogle ${className}`}
        style={{ display: "block" }}
        data-ad-client={ADSENSE_ID}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </>
  );
}

declare global {
  interface Window {
    adsbygoogle: object[];
  }
}
