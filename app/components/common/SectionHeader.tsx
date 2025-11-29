// components/common/SectionHeader.tsx
interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeaderProps) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-2 ${alignment}`}>
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F4D58D]">
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl font-semibold text-gray-50 sm:text-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-sm text-gray-400">{subtitle}</p>
      )}
      <div className="mt-1 h-px w-16 rounded-full bg-gradient-to-r from-[#F4D58D] to-[#7C3AED]" />
    </div>
  );
}
