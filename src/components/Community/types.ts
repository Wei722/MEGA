import { LucideIcon } from 'lucide-react';

export interface StatProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

export interface SocialProps {
  name: string;
  icon: React.ReactNode;
  url: string;
  description: string;
  gradient: string;
}