import { useEffect, useRef } from 'react';

interface Logo {
  name: string;
  logo: string;
}

const ITEM_H = 140;
const SPEED = 45; // px per second
const REEL_H = 460;

export function LogoReel({ logos, bgColor = 'white' }: { logos: Logo[]; bgColor?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const items: HTMLElement[] = Array.from(el.querySelectorAll<HTMLElement>('[data-item]'));
    const total = logos.length * ITEM_H;
    const center = REEL_H / 2;
    const maxDist = ITEM_H * 2.2;

    // Start with item[0] centered
    let offset = total - (center - ITEM_H / 2);
    let prev: number | null = null;
    let raf: number;

    const tick = (t: number) => {
      if (prev === null) prev = t;
      offset = (offset + ((t - prev) / 1000) * SPEED) % total;
      prev = t;

      items.forEach((item, i) => {
        // Smooth wrapping: items scroll from bottom to top, wrap seamlessly
        let y = ((i * ITEM_H - offset + ITEM_H) % total + total) % total - ITEM_H;

        const dist = Math.abs(y + ITEM_H / 2 - center);
        const norm = Math.min(dist / maxDist, 1);
        const scale = 1 - norm * 0.65;
        const opacity = Math.max(0, 1 - norm * 0.85);

        item.style.transform = `translateY(${y}px) scale(${scale})`;
        item.style.opacity = `${opacity}`;
        item.style.zIndex = `${Math.round(opacity * 10)}`;
      });

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [logos]);

  return (
    <div
      ref={containerRef}
      className="relative select-none"
      style={{
        backgroundColor: bgColor,
        height: REEL_H,
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 22%, black 78%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 22%, black 78%, transparent 100%)',
        overflow: 'hidden',
      }}
    >
      {logos.map((logo) => (
        <div
          key={logo.name}
          data-item
          className="absolute inset-x-0 flex items-center justify-center"
          style={{
            height: ITEM_H,
            top: 0,
            transformOrigin: 'center center',
            willChange: 'transform, opacity',
          }}
        >
          <img
            src={`${import.meta.env.BASE_URL}${logo.logo.replace(/^\//, '')}`}
            alt={logo.name}
            draggable={false}
            className="h-24 w-96 object-contain grayscale"
          />
        </div>
      ))}
    </div>
  );
}

export function LogoMarquee({ logos, bgColor = '#ffffff' }: { logos: Logo[]; bgColor?: string }) {
  const loopLogos = [...logos, ...logos];

  return (
    <div
      className="relative overflow-hidden border-y border-brand-dark/8"
      style={{
        backgroundColor: bgColor,
        maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
      }}
      aria-label="Clientes de referencia"
    >
      <div className="logo-marquee-track flex w-max items-center gap-8 py-5 sm:gap-10 sm:py-6">
        {loopLogos.map((logo, i) => (
          <div
            key={`${logo.name}-${i}`}
            className="flex h-16 w-[150px] shrink-0 items-center justify-center sm:h-20 sm:w-[190px]"
          >
            <img
              src={`${import.meta.env.BASE_URL}${logo.logo.replace(/^\//, '')}`}
              alt={logo.name}
              draggable={false}
              className="max-h-12 max-w-[140px] object-contain grayscale opacity-70 sm:max-h-14 sm:max-w-[175px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
