import React, { useState } from "react";
import { cn } from "@/lib/utils";

export interface AvatarPhotoProps {
  src?: string;
  name: string;
  fallbackInitials: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizeClasses = {
  sm: "w-8 h-8 text-xs font-semibold",
  md: "w-9 h-9 text-xs font-bold",
  lg: "w-12 h-12 text-sm font-bold",
  xl: "w-16 h-16 text-lg font-bold",
};

export const AvatarPhoto: React.FC<AvatarPhotoProps> = ({
  src,
  name,
  fallbackInitials,
  size = "md",
  className = "",
}) => {
  const [imgError, setImgError] = useState(false);
  const sizeStyle = sizeClasses[size];

  if (src && !imgError) {
    return (
      <div
        className={cn(
          "relative inline-block shrink-0 select-none overflow-hidden rounded-full border border-border",
          sizeStyle,
          className,
        )}
      >
        <img
          src={src}
          alt={name}
          className="h-full w-full object-cover"
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={() => setImgError(true)}
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "avatar relative inline-flex shrink-0 select-none items-center justify-center rounded-full bg-green-100 text-green-800 border border-green-700/20 font-bold",
        sizeStyle,
        className,
      )}
      title={name}
    >
      <span>{fallbackInitials}</span>
    </div>
  );
};
