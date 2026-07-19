import { ArrowUpRight } from "lucide-react";

interface ContactLinkProps {
  title: string;
  href: string;
}

export default function ContactLink({
  title,
  href,
}: ContactLinkProps) {
  const isEmail = href.startsWith("mailto:");

  return (
    <a
      href={href}
      target={isEmail ? undefined : "_blank"}
      rel={isEmail ? undefined : "noopener noreferrer"}
      className="group block"
    >
      <div className="flex items-center justify-between">
        <span className="text-sm uppercase tracking-[0.35em]">
          {title}
        </span>

        <ArrowUpRight
          size={18}
          className="transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </div>

      <div className="mt-4 h-px w-full overflow-hidden bg-[#F5EBDC]/25">
        <div className="h-full w-0 bg-[#F5EBDC] transition-all duration-500 group-hover:w-full" />
      </div>
    </a>
  );
}