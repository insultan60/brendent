'use client';

import { useReveal } from '@/hooks/useReveal';
import NavbarV2 from '@/views/home-v2/components/NavbarV2';
import FooterV2 from '@/views/home-v2/components/FooterV2';
import CtaV2 from '@/views/home-v2/components/CtaV2';
import BlogHero from '@/views/blog/components/BlogHero';
import BlogGrid from '@/views/blog/components/BlogGrid';
import BlogNewsletter from '@/views/blog/components/BlogNewsletter';

export default function Blog() {
  useReveal();

  return (
    <div className="min-h-screen bg-background-100">
      <NavbarV2 linkBase="/" homeHref="/" />
      <main>
        <BlogHero />
        <BlogGrid />
        <BlogNewsletter />
        <CtaV2 />
      </main>
      <FooterV2 linkBase="/" />
    </div>
  );
}