'use client';

import { useReveal } from '@/hooks/useReveal';
import NavbarV2 from '@/views/home-v2/components/NavbarV2';
import FooterV2 from '@/views/home-v2/components/FooterV2';
import CtaV2 from '@/views/home-v2/components/CtaV2';
import ArticleHero from '@/views/blog-detail/components/ArticleHero';
import ReadingProgress from '@/views/blog-detail/components/ReadingProgress';
import ArticleBody from '@/views/blog-detail/components/ArticleBody';
import ArticleSidebar from '@/views/blog-detail/components/ArticleSidebar';

export default function BlogDetail() {
  useReveal();

  return (
    <div className="min-h-screen bg-background-100">
      <NavbarV2 linkBase="/" homeHref="/" />
      <ReadingProgress />

      <main>
        <ArticleHero />

        <div className="mx-auto mt-14 grid max-w-[1280px] grid-cols-1 gap-12 px-5 pb-20 md:mt-16 md:px-10 lg:grid-cols-[minmax(0,1fr)_330px] lg:gap-16 lg:pb-28">
          <ArticleBody />
          <ArticleSidebar />
        </div>
      </main>

      <CtaV2 />
      <FooterV2 linkBase="/" />
    </div>
  );
}