import { MessageCircle } from 'lucide-react';

/** Floating contact shortcut, echoing the source landing page's corner button. */
export default function CashOfferContactButton() {
  return (
    <a
      href="#contact"
      aria-label="Contact BW Metro Properties about a cash offer for your home"
      className="btn-shimmer fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-primary-500 text-background-50 transition-colors duration-300 hover:bg-primary-600 md:bottom-8 md:right-8"
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
    </a>
  );
}