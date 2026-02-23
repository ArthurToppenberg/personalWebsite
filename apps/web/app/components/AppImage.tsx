"use client";

import Image, { type ImageProps } from "next/image";
import { useState, type CSSProperties, type SyntheticEvent } from "react";
import { assetPath } from "../lib/assetPath";
import blurMap from "../lib/blurPlaceholders.json";

type AppImageProps = Omit<ImageProps, "src"> & { src: string };

const BLUR_PLACEHOLDER_STYLE: CSSProperties = {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  filter: "blur(20px)",
  transform: "scale(1.1)",
  transition: "opacity 500ms ease-out",
  pointerEvents: "none",
};

export function AppImage({
  src,
  fill,
  className,
  style,
  onLoad,
  width,
  height,
  ...props
}: AppImageProps) {
  const blurDataURL = (blurMap as Record<string, string>)[src];
  const [loaded, setLoaded] = useState(!blurDataURL);

  if (!blurDataURL) {
    return (
      <Image
        src={assetPath(src)}
        fill={fill}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        className={className}
        style={style}
        onLoad={onLoad}
        {...props}
      />
    );
  }

  const handleLoad = (event: SyntheticEvent<HTMLImageElement>): void => {
    setLoaded(true);
    if (typeof onLoad === "function") {
      (onLoad as (event: SyntheticEvent<HTMLImageElement>) => void)(event);
    }
  };

  const blurPlaceholder = (
    <img
      src={blurDataURL}
      alt=""
      aria-hidden="true"
      style={{ ...BLUR_PLACEHOLDER_STYLE, opacity: loaded ? 0 : 1 }}
    />
  );

  if (fill) {
    return (
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        {blurPlaceholder}
        <Image
          src={assetPath(src)}
          fill
          className={className}
          style={{
            ...style,
            transition: "opacity 500ms ease-out",
            opacity: loaded ? 1 : 0,
          }}
          onLoad={handleLoad}
          {...props}
        />
      </div>
    );
  }

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      {blurPlaceholder}
      <Image
        src={assetPath(src)}
        width={width}
        height={height}
        className={className}
        style={{
          display: "block",
          ...style,
          transition: "opacity 500ms ease-out",
          opacity: loaded ? 1 : 0,
        }}
        onLoad={handleLoad}
        {...props}
      />
    </div>
  );
}
