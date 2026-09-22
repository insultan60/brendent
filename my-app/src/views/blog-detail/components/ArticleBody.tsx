import Reveal from '@/components/base/Reveal';
import { articleLead } from '@/mocks/blogDetailData';
import MarketSection from '@/views/blog-detail/components/MarketSection';
import StepsSection from '@/views/blog-detail/components/StepsSection';
import ProgramsSection from '@/views/blog-detail/components/ProgramsSection';
import ClosingSection from '@/views/blog-detail/components/ClosingSection';
import ArticleShare from '@/views/blog-detail/components/ArticleShare';
import RelatedArticle from '@/views/blog-detail/components/RelatedArticle';

export default function ArticleBody() {
  return (
    <article className="max-w-[780px]">
      <Reveal>
        <div className="flex flex-col gap-6">
          {articleLead.map((paragraph) => (
            <p
              key={paragraph}
              className="text-[17px] leading-[1.9] text-foreground-700 md:text-[19px]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </Reveal>

      <MarketSection />
      <StepsSection />
      <ProgramsSection />
      <ClosingSection />

      <ArticleShare />
      <RelatedArticle />
    </article>
  );
}