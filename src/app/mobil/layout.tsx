import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobil Projeleri — WOX",
};

export default function MobilLayout({ children }: { children: React.ReactNode }) {
  return children;
}
