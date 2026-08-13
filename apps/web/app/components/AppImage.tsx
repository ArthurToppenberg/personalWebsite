"use client";

import Image, { type ImageProps } from "next/image";
import { type SyntheticEvent, useState } from "react";

type AppImageProps = Omit<ImageProps, "src"> & {
  src: string;
  caption?: string;
  grayscale?: boolean;
};

export function AppImage({
  src,
  fill,
  className,
  style,
  onLoad,
  width,
  height,
  caption,
  grayscale,
  ...props
}: AppImageProps) {
  const [loaded, setLoaded] = useState(false);
  const mergedClassName = grayscale
    ? className
      ? `${className} grayscale`
      : "grayscale"
    : className;

  const handleLoad = (event: SyntheticEvent<HTMLImageElement>): void => {
    setLoaded(true);
    if (typeof onLoad === "function") {
      (onLoad as (event: SyntheticEvent<HTMLImageElement>) => void)(event);
    }
  };

  const image = (
    <Image
      src={src}
      fill={fill}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      className={mergedClassName}
      style={{
        display: "block",
        ...style,
        transition: "opacity 500ms ease-out",
        opacity: loaded ? 1 : 0,
      }}
      onLoad={handleLoad}
      {...props}
    />
  );

  const skeleton = (
    <div
      aria-hidden="true"
      className="absolute inset-0 animate-pulse bg-muted"
      style={{ opacity: loaded ? 0 : 1, transition: "opacity 500ms ease-out" }}
    />
  );

  const content = fill ? (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
      {skeleton}
      {image}
    </div>
  ) : (
    <div style={{ position: "relative", overflow: "hidden" }}>
      {skeleton}
      {image}
    </div>
  );

  if (caption) {
    if (fill) {
      return (
        <figure className="m-0" style={{ position: "absolute", inset: 0 }}>
          {content}
          <figcaption className="absolute bottom-0 left-0 right-0 border-t border-border/40 bg-background/80 px-4 py-2 text-left text-xs text-muted-foreground tracking-tight backdrop-blur-sm">
            {caption}
          </figcaption>
        </figure>
      );
    }
    return (
      <figure className="m-0">
        {content}
        <figcaption className="mt-2 text-left text-xs text-muted-foreground tracking-tight">
          {caption}
        </figcaption>
      </figure>
    );
  }

  return content;
}
