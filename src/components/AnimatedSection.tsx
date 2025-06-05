
import { useEffect, useRef, useState } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-in" | "scale-in" | "slide-up";
}

export const AnimatedSection = ({ 
  children, 
  className = "", 
  animation = "fade-in" 
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
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
  }, []);

  const getAnimationClass = () => {
    switch (animation) {
      case "fade-in":
        return isVisible ? "animate-fade-in" : "opacity-0 translate-y-4";
      case "scale-in":
        return isVisible ? "animate-scale-in" : "opacity-0 scale-95";
      case "slide-up":
        return isVisible ? "animate-fade-in" : "opacity-0 translate-y-8";
      default:
        return isVisible ? "animate-fade-in" : "opacity-0";
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  );
};
