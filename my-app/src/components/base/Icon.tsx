import {
  Compass,
  Facebook,
  Handshake,
  Home,
  Instagram,
  Linkedin,
  MapPin,
  MessagesSquare,
  ShieldCheck,
  Sofa,
  Tag,
  Target,
  Youtube,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const iconRegistry: Record<string, LucideIcon> = {
  strategy: Target,
  communication: MessagesSquare,
  market: MapPin,
  negotiation: Handshake,
  military: ShieldCheck,
  buy: Home,
  sell: Tag,
  staging: Sofa,
  expertise: Compass,
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
};

interface IconProps {
  name: string;
  className?: string;
}

export default function Icon({ name, className = '' }: IconProps) {
  const Component = iconRegistry[name];

  if (!Component) {
    return null;
  }

  return <Component className={className} aria-hidden="true" />;
}