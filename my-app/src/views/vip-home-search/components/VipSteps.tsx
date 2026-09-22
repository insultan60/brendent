import { vipSteps } from '@/mocks/vipSearchData';

export default function VipSteps() {
  return (
    <ol className="relative mt-12 flex flex-col gap-9">
      <span
        className="absolute bottom-5 left-[23px] top-5 w-px bg-background-50/15"
        aria-hidden="true"
      />
      <span
        className="vip-line absolute bottom-5 left-[23px] top-5 w-px origin-top bg-gradient-to-b from-primary-400 via-primary-500 to-accent-500"
        aria-hidden="true"
      />

      {vipSteps.map((item, index) => (
        <li
          key={item.step}
          className="v2-rise relative flex items-start gap-5"
          style={{ animationDelay: `${520 + index * 160}ms` }}
        >
          <span className="relative z-10 flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full border border-background-50/30 bg-foreground-950 font-heading text-[15px] leading-none text-background-50 transition-colors duration-500 hover:border-primary-400">
            {item.step}
          </span>
          <span className="pt-1.5">
            <span className="block font-heading text-[20px] leading-tight text-background-50">
              {item.title}
            </span>
            <span className="mt-1.5 block max-w-xs text-[13.5px] leading-relaxed text-background-300">
              {item.text}
            </span>
          </span>
        </li>
      ))}
    </ol>
  );
}