'use client';
import React from 'react';
import './verticalMarquee.scss';

interface MarqueeItem {
  key: string;
  content: React.ReactNode;
}

interface VerticalMarqueeProps {
  items: MarqueeItem[];
  visibleCount?: number;
  itemHeight?: number;
  duration?: number; // duração total da animação em segundos
}

export default function InfiniteVerticalMarquee({
  items,
  visibleCount = 5,
  itemHeight = 72,
  duration = 16,
}: VerticalMarqueeProps) {
  // Duplicar os itens para o loop visual
  const marqueeItems = [...items, ...items];

  return (
    <div
      className="vertical-marquee-viewport"
      style={{ height: visibleCount * itemHeight, overflow: 'hidden', position: 'relative' }}
    >
      <div
        className="vertical-marquee-track vertical-marquee-track-continuous"
        style={{
          animation: `vertical-marquee-continuous ${duration}s linear infinite`,
        }}
      >
        {marqueeItems.map((item, idx) => (
          <div className="vertical-marquee-item" style={{ height: itemHeight }} key={item.key + '-' + idx}>
            {item.content}
          </div>
        ))}
      </div>
      <div className="vertical-marquee-fade-top"></div>
      <div className="vertical-marquee-fade-bottom"></div>
    </div>
  );
} 