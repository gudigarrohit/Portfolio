"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function NavLink({
  href,
  children,
  className,
  activeClassName,
  ...props
}) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        className,
        isActive && activeClassName
      )}
      {...props}
    >
      {children}
    </Link>
  );
}