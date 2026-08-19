import BrowserMockup from "@/components/sections/BrowserMockup";

export default function CategoryHero({
  title,
  showMockup = false,
}: {
  title: string;
  showMockup?: boolean;
}) {
  return (
    <section className="relative overflow-hidden pb-16 pt-32">
      <div className="flex flex-col items-center px-6 text-center sm:px-12 lg:px-24">
        <h1 className="max-w-[90vw] font-display font-semibold tracking-tight text-[8vw] leading-tight sm:max-w-none sm:whitespace-nowrap sm:text-[4.5vw] sm:leading-none">
          {title}
        </h1>
      </div>

      {showMockup && (
        <div className="mt-14 px-[30px]">
          <BrowserMockup />
        </div>
      )}
    </section>
  );
}
