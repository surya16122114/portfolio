"use client";

/**
 * HeroUI-style ambient background: soft violet/blue/fuchsia glows over a faint
 * grid. Purely decorative, fixed behind all content.
 */
export function BackgroundFx() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
        <div className="absolute -top-[10%] left-[8%] h-[40rem] w-[40rem] animate-aurora rounded-full bg-violet-600/20 blur-[150px] dark:bg-violet-600/25" />
        <div className="absolute top-[18%] -right-[6%] h-[34rem] w-[34rem] animate-aurora rounded-full bg-blue-600/15 blur-[150px] dark:bg-blue-600/20" />
        <div className="absolute bottom-[2%] left-[28%] h-[30rem] w-[30rem] animate-aurora rounded-full bg-fuchsia-600/10 blur-[150px] dark:bg-fuchsia-600/15" />
      </div>
      <div className="grid-bg pointer-events-none fixed inset-0 -z-20" />
    </>
  );
}
