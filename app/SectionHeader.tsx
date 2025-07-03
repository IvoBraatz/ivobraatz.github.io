import React from 'react';
import './SectionHeader.scss';

interface SectionHeaderProps {
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: 'center' | 'left';
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  highlight,
  subtitle,
  align = 'left',
  className = '',
}) => (
  <div className={`section-header section-header--${align} ${className}`.trim()}>
    <h2 className="section-header__title">
      {title} {highlight && <span className="section-header__highlight">{highlight}</span>}
    </h2>
    {subtitle && <p className="section-header__subtitle">{subtitle}</p>}
  </div>
);

export default SectionHeader; 