import { Map, Compass, Users, Building2, Briefcase, Award } from 'lucide-react';
import { NavItem, NewsItem, ServiceItem, RecruitInfo } from './types';

export const COMPANY_NAME = "株式会社ホライズン・プランニング";
export const COMPANY_NAME_EN = "Horizon Leisure Planning Co., Ltd.";

export const NAV_ITEMS: NavItem[] = [
  { label: 'TOP', path: '/' },
  { label: '私たちについて', path: '/about' },
  { label: '事業内容', path: '/services' },
  { label: 'ニュース', path: '/news' },
  { label: '採用情報', path: '/recruit' },
  { label: 'お問い合わせ', path: '/contact' },
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: '1',
    date: '2024.05.20',
    category: 'Press Release',
    title: '新規ラグジュアリーグランピング施設「AURA」のプロデュースを開始しました',
    content: '自然と調和する新しい宿泊体験を提供するプロジェクトが始動しました。',
    image: 'https://picsum.photos/800/600?random=10'
  },
  {
    id: '2',
    date: '2024.04.15',
    category: 'Info',
    title: '本社移転のお知らせ',
    content: '事業拡大に伴い、本社を港区六本木へ移転いたしました。',
    image: 'https://picsum.photos/800/600?random=11'
  },
  {
    id: '3',
    date: '2024.04.01',
    category: 'Event',
    title: '「未来のレジャーを考える」シンポジウムに弊社代表が登壇します',
    content: '業界のトップランナーが集まるイベントにて基調講演を行います。',
    image: 'https://picsum.photos/800/600?random=12'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'resort',
    title: 'リゾート開発・企画',
    enTitle: 'Resort Planning',
    description: '土地のポテンシャルを最大限に引き出し、持続可能なリゾート開発をトータルでサポートします。',
    icon: Map,
    image: 'https://picsum.photos/800/600?random=20',
    details: ['用地選定・マーケティング調査', 'コンセプト立案・事業計画策定', '建築デザイン監修', '運営オペレーション構築']
  },
  {
    id: 'event',
    title: 'イベントプロデュース',
    enTitle: 'Event Production',
    description: '企業の周年行事から地域活性化フェスティバルまで、心に残る体験を創造します。',
    icon: Compass,
    image: 'https://picsum.photos/800/600?random=21',
    details: ['企業イベント・パーティー企画', '地域創生イベント運営', 'プロモーション施策', '空間演出・アートディレクション']
  },
  {
    id: 'consulting',
    title: 'レジャーコンサルティング',
    enTitle: 'Consulting',
    description: '既存施設の収益改善やリブランディングなど、専門的な知見で課題解決に導きます。',
    icon: Building2,
    image: 'https://picsum.photos/800/600?random=22',
    details: ['集客戦略・マーケティング支援', 'オペレーション改善', 'DX推進・システム導入', 'スタッフ教育・研修']
  }
];

export const RECRUIT_INFO: RecruitInfo[] = [
  {
    category: '募集要項',
    items: [
      { label: '雇用形態', value: '正社員（試用期間3ヶ月）' },
      { label: '勤務地', value: '東京本社（リモートワーク制度あり）' },
      { label: '勤務時間', value: '10:00 - 19:00（フレックスタイム制）' },
      { label: '給与', value: '経験・能力を考慮の上、当社規定により決定' },
      { label: '休日・休暇', value: '完全週休2日制（土日祝）、夏季休暇、年末年始休暇、有給休暇' },
    ]
  }
];