import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Projeleri — WOX",
};

export default function WebLayout({ children }: { children: React.ReactNode }) {
  return children;
}
