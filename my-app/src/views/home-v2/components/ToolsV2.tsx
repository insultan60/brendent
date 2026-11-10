import { ArrowUpRight, Calculator } from 'lucide-react';
import Reveal from '@/components/base/Reveal';
import { homeTools } from '@/mocks/homeData';
import { Eyebrow } from '@/views/home-v2/components/shared';

export default function ToolsV2({ index }: { index: string }) {
  return (
    <section id="tools" className="bg-background-100 px-5 py-24 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="max-w-3xl">
          <Eyebrow index={index}>Calculators</Eyebrow>
          <h2 className="mt-7 font-heading text-[34px] font-normal leading-[1.04] tracking-[-0.02em] text-foreground-950 md:text-[52px]">
            Run the Numbers <em className="italic">Before You Move</em>
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {homeTools.map((tool, i) => (
            <Reveal key={tool.href} delay={i * 90} className="h-full">
              <a
                href={tool.href}
                className="group flex h-full flex-col justify-between gap-10 rounded-[26px] border border-background-300 bg-background-50 p-8 transition-colors duration-300 hover:border-foreground-400"
              >
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-100 text-accent-700">
                    <Calculator className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <h3 className="mt-7 font-heading text-[24px] leading-tight text-foreground-950">{tool.title}</h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-foreground-600">{tool.text}</p>
                </div>
                <span className="arrow-btn flex h-10 w-10 items-center justify-center rounded-full border border-foreground-300 text-foreground-800 transition-colors duration-300 group-hover:border-foreground-950 group-hover:bg-foreground-950 group-hover:text-background-50">
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
