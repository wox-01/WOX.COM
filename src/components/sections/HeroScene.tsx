"use client";

import { Suspense, lazy } from "react";
import SplashScreen from "@/components/layout/SplashScreen";

const Spline = lazy(() => import("@splinetool/react-spline"));

const SCENE_URL = "https://prod.spline.design/Qew9xvdoKYMmI5t1/scene.splinecode";

export default function HeroScene({ className = "" }: { className?: string }) {
  return (
    <div className={`hero-scene relative ${className}`}>
      <Suspense
        fallback={
          <div
            className="absolute inset-0 flex items-center justify-center overflow-hidden bg-background"
            aria-hidden
          >
            <SplashScreen />
          </div>
        }
      >
        <Spline scene={SCENE_URL} className="h-full w-full" />
      </Suspense>
      {/* Dokunmatik ekranda sahnenin kamera sürüklemesi (window'a bağlı touch
          dinleyicisi) sayfa scroll'unu yutmasın diye canvas'ı fiziksel olarak
          kaplayan görünmez bir katman koyuyoruz — dokunuş hiç canvas'a değmiyor. */}
      <div className="absolute inset-0 sm:hidden" aria-hidden />
    </div>
  );
}
