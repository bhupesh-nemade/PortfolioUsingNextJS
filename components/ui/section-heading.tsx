import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <p className="eyebrow text-[var(--indigo)]">{eyebrow}</p>
      <h2 className="section-title mt-3 text-[var(--ink)]">{title}</h2>
      {description ? <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--ink-soft)] sm:text-lg">{description}</p> : null}
    </div>
  );
}
