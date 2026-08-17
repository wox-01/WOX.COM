import Image from "next/image";
import Link from "next/link";
import Menu from "@/components/Menu";
import LanguageSwitch from "@/components/LanguageSwitch";

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-[9996] flex items-center justify-between bg-gradient-to-b from-background via-background/80 to-transparent px-6 py-6 sm:px-12 lg:px-24">
      <Link href="/#top" data-cursor-hover className="inline-flex items-center">
        <Image src="/logo-v2.png" alt="WOX" width={130} height={40} priority className="h-8 w-auto" />
      </Link>
      <div className="flex items-center gap-3">
        <LanguageSwitch />
        <Menu />
      </div>
    </header>
  );
}
