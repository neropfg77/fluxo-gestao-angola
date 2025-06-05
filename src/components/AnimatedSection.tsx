
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
        return isVisible ? "animate-fade-in" : "opacity-0 translate-y-8";
      case "scale-in":
        return isVisible ? "animate-scale-in" : "opacity-0 scale-75";
      case "slide-up":
        return isVisible ? "animate-slide-up" : "opacity-0 translate-y-12";
      case "fade-in-left":
        return isVisible ? "animate-fade-in-left" : "opacity-0 -translate-x-8";
      case "fade-in-right":
        return isVisible ? "animate-fade-in-right" : "opacity-0 translate-x-8";
      case "bounce-in":
        return isVisible ? "animate-bounce-in" : "opacity-0 scale-50";
      default:
        return isVisible ? "animate-fade-in" : "opacity-0";
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
