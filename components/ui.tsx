import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { APP_STORE_URL } from "@/lib/site";

export function AppleLogo({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

export function Check({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3 7.4l2.6 2.6L11 4.6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Arrow({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Primärer Weg zur App – überall derselbe Text, dasselbe Ziel. */
export function AppStoreButton({ label = "Im App Store laden", className = "" }: { label?: string; className?: string }) {
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn btn-primary ${className}`}
    >
      <AppleLogo />
      {label}
    </a>
  );
}

export function Kicker({ children, tone }: { children: ReactNode; tone?: string }) {
  return (
    <p className="kicker" style={tone ? ({ "--tone": tone } as CSSProperties) : undefined}>
      {children}
    </p>
  );
}

export function Phone({
  src,
  alt,
  width = 280,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  width?: number;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={`phone ${className}`} style={{ "--w": `${width}px` } as CSSProperties}>
      <Image src={src} alt={alt} width={600} height={1300} priority={priority} sizes={`${width}px`} />
    </div>
  );
}

export function BrandMark({ size = 32 }: { size?: number }) {
  return (
    <Image
      src="/brand/icon.webp"
      alt=""
      width={size}
      height={size}
      className="rounded-[22%] ring-1 ring-white/15"
      style={{ width: size, height: size }}
    />
  );
}
