import React from 'react';
import './SectionHeader.scss';

export interface SectionHeaderProps {
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: 'center' | 'left';
  size?: 'default' | 'compact' | 'large';
  className?: string;
  children?: React.ReactNode;
  // Props para melhor controle de responsividade
  stackOnMobile?: boolean;
  // Props para acessibilidade
  titleId?: string;
  subtitleId?: string;
  // Props para animações
  animateOnScroll?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  highlight,
  subtitle,
  align = 'left',
  size = 'default',
  className = '',
  children,
  stackOnMobile = true,
  titleId,
  subtitleId,
  animateOnScroll = false,
}) => {
  // Gerar IDs únicos se não fornecidos
  const generatedTitleId = titleId || `section-title-${Math.random().toString(36).substr(2, 9)}`;
  const generatedSubtitleId = subtitleId || `section-subtitle-${Math.random().toString(36).substr(2, 9)}`;

  // Construir classes CSS
  const baseClass = 'section-header';
  const alignmentClass = `section-header--${align}`;
  const sizeClass = size !== 'default' ? `section-header--${size}` : '';
  const stackClass = stackOnMobile ? 'section-header--stack-mobile' : '';
  const animationClass = animateOnScroll ? 'section-header--animate-on-scroll' : '';
  
  const combinedClassName = [
    baseClass,
    alignmentClass,
    sizeClass,
    stackClass,
    animationClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={combinedClassName}>
      <div className="section-header__left">
        <h2 
          className="section-header__title"
          id={generatedTitleId}
          aria-describedby={subtitle ? generatedSubtitleId : undefined}
        >
          {title}
          {highlight && (
            <span 
              className="section-header__highlight"
              aria-label={`destaque: ${highlight}`}
            >
              {highlight}
            </span>
          )}
        </h2>
        
        {subtitle && (
          <p 
            className="section-header__subtitle"
            id={generatedSubtitleId}
          >
            {subtitle}
          </p>
        )}
      </div>
      
      {children && (
        <div className="section-header__right">
          {children}
        </div>
      )}
    </div>
  );
};

export default SectionHeader; 