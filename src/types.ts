/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  iconName: string;
  features: string[];
  priceEst?: string;
  deliveryTime?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  image?: string;
  rating: number;
  comment: string;
  metric: string;
  metricLabel: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ProjectConfig {
  type: string;
  name: string;
  business: string;
  goal: string;
  hasAutomation: boolean;
  timeframe: string;
}
