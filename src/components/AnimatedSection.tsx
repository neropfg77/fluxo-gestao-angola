
import { useEffect, useRef, useState } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-in" | "scale-in" | "slide-up" | "fade-in-left" | "fade-in-right" | "bounce-in";
  delay?: number;
}

export const AnimatedSection = ({ 
  children, 
  className = "", 
  animation = "fade-in",
  delay = 0
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  const getAnimationClass = () => {
    switch (animation) {
      case "fade-in":
        return isVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-8 blur-sm";
      case "scale-in":
        return isVisible ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-75 blur-sm";
      case "slide-up":
        return isVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-12 blur-sm";
      case "fade-in-left":
        return isVisible ? "opacity-100 translate-x-0 blur-0" : "opacity-0 -translate-x-8 blur-sm";
      case "fade-in-right":
        return isVisible ? "opacity-100 translate-x-0 blur-0" : "opacity-0 translate-x-8 blur-sm";
      case "bounce-in":
        return isVisible ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-50 blur-sm";
      default:
        return isVisible ? "opacity-100 blur-0" : "opacity-0 blur-sm";
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  );
};
