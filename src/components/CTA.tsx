import Link from "next/link";
import { IconType } from "react-icons";

export interface CTAProps {
  /** Destination URL */
  href: string;
  /** Button text */
  label: string;
  /** Optional icon component from react-icons */
  Icon?: IconType;
  /** Optional aria-label for accessibility; defaults to label */
  ariaLabel?: string;
  /** Additional Tailwind classes to customize styling */
  className?: string;
}

/**
 * Reusable CTA button component.
 * Uses react-icons for optional icons.
 */
export const CTA: React.FC<CTAProps> = ({
  href,
  label,
  Icon,
  ariaLabel,
  className = "",
}) => (
  <Link
    href={href}
    aria-label={ariaLabel ?? label}
    className={
      `inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold ` +
      `rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-oceanLight ` +
      `transition ${className}`
    }
  >
    {label}
    {Icon && <Icon className="w-5 h-5" />}
  </Link>
);
