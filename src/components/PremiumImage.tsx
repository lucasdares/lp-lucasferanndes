import React, { useState } from 'react';

interface PremiumImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
  alt?: string;
  fallbackSrc?: string;
  className?: string;
}

export function PremiumImage({ src, fallbackSrc, alt, className, ...props }: PremiumImageProps) {
  const [errorOccurred, setErrorOccurred] = useState(false);

  // Premium fallbacks depending on name context or general fitness
  let defaultFallback = fallbackSrc;
  if (!defaultFallback) {
    if (alt?.toLowerCase().includes('lucas') || alt?.toLowerCase().includes('expert')) {
      defaultFallback = 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=700'; // fit professional trainer
    } else if (alt?.toLowerCase().includes('app') || alt?.toLowerCase().includes('dashboard')) {
      defaultFallback = 'https://images.unsplash.com/photo-1510017808664-15f189e85810?auto=format&fit=crop&q=80&w=700'; // smartwatch metrics
    } else if (alt?.toLowerCase().includes('karla') || alt?.toLowerCase().includes('woman')) {
      defaultFallback = 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=500'; // woman transformation athletic
    } else if (alt?.toLowerCase().includes('felipe') || alt?.toLowerCase().includes('roberto') || alt?.toLowerCase().includes('man')) {
      defaultFallback = 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=500'; // fit guy back musculature
    } else {
      defaultFallback = 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600'; // general premium gym
    }
  }

  const currentSrc = errorOccurred ? defaultFallback : src;

  return (
    <img
      src={currentSrc}
      alt={alt || 'EVO Fitness'}
      className={className}
      referrerPolicy="no-referrer"
      onError={() => {
        setErrorOccurred(true);
      }}
      {...props}
    />
  );
}
export default PremiumImage;
