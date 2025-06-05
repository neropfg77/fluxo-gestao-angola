
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ZoomIn } from "lucide-react";

interface ImageModalProps {
  src: string;
  alt: string;
  className?: string;
}

export const ImageModal = ({ src, alt, className = "" }: ImageModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className={`relative cursor-pointer group ${className}`}>
          <img src={src} alt={alt} className="rounded-xl shadow-2xl w-full transition-transform duration-300 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-xl flex items-center justify-center">
            <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-full p-0">
        <img src={src} alt={alt} className="w-full h-auto rounded-lg" />
      </DialogContent>
    </Dialog>
  );
};
