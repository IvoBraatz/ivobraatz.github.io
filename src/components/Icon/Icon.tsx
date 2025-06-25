import { LucideIcon } from 'lucide-react';

interface IconProps {
  icon: LucideIcon;
  size?: number;
  className?: string;
  color?: string;
}

export default function Icon({ icon: IconComponent, size = 24, className = '', color }: IconProps) {
  return (
    <IconComponent 
      size={size} 
      className={className}
      color={color}
      strokeWidth={1.5}
    />
  );
} 