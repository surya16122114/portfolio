import { SysNav } from "@/components/layout/sys-nav";
import { grotesk, jbm } from "@/components/layout/sys-fonts";

export default function RoutesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`sys ${grotesk.variable} ${jbm.variable}`} style={{ paddingBottom: 0 }}>
      <div className="glow a" />
      <div className="glow b" />
      <SysNav />
      <div className="pagewrap">{children}</div>
      <div className="wrap">
        <footer className="sfoot">© 2026 Chinnasurya Prasad Vulavala · built with Next.js</footer>
      </div>
    </div>
  );
}
