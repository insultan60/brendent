import {
  BadgeDollarSign,
  BookOpen,
  Building2,
  Dumbbell,
  KeyRound,
  ListChecks,
  Repeat,
  TrendingUp,
  UserRound,
  Users,
  Wallet,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const registry: Record<string, LucideIcon> = {
  building: Building2,
  flexibility: Repeat,
  key: KeyRound,
  finance: Wallet,
  book: BookOpen,
  buyer: UserRound,
  renter: Users,
  investor: BadgeDollarSign,
  checklist: ListChecks,
  money: BadgeDollarSign,
  amenities: Dumbbell,
  resale: TrendingUp,
};

interface CardIconProps {
  name: string;
  className?: string;
}

export default function CardIcon({ name, className = '' }: CardIconProps) {
  const Component = registry[name] ?? Building2;
  return <Component className={className} aria-hidden="true" />;
}