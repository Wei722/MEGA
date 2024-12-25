import { LucideIcon } from 'lucide-react';

export interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  linkText: string;
}

export interface StepData extends StepProps {
  icon: LucideIcon;
}