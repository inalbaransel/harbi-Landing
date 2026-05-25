"use client";

import { usePageTransition } from "@/components/ui/PageTransition";
import { usePathname } from "next/navigation";

interface TransitionLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export function TransitionLink({ href, children, className, style, onClick }: TransitionLinkProps) {
  const { navigateTo } = usePageTransition();
  const pathname = usePathname();

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();

    // If clicking the current page, do nothing
    if (href === pathname) return;

    // Run any extra onClick handler (e.g. closing mobile menu)
    onClick?.();

    // Trigger the animated navigation
    navigateTo(href);
  }

  return (
    <a href={href} onClick={handleClick} className={className} style={style}>
      {children}
    </a>
  );
}
