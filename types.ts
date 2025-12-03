import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface NewsItem {
  id: string;
  date: string;
  category: 'Press Release' | 'Info' | 'Event';
  title: string;
  content: string;
  image?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  enTitle: string;
  description: string;
  icon: LucideIcon;
  image: string;
  details: string[];
}

export interface RecruitInfo {
  category: string;
  items: { label: string; value: string }[];
}