"use client";

import { MDXContent } from "@content-collections/mdx/react";
import React from "react";
import { AppImage } from "../../components/AppImage";

type MDXImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

type ProjectImageProps = {
  src: string;
  alt: string;
  caption?: string;
};

function ProjectImage({ src, alt, caption }: ProjectImageProps) {
  return (
    <AppImage
      src={src}
      alt={alt}
      caption={caption}
      width={1024}
      height={768}
      className="h-auto w-full rounded-xl object-cover"
    />
  );
}

type ProjectImageGalleryProps = {
  children?: React.ReactNode;
};

function ProjectImageGallery({ children }: ProjectImageGalleryProps) {
  const items = React.Children.toArray(children).filter(
    (child): child is React.ReactElement<ProjectImageProps> =>
      React.isValidElement(child) && child.type === ProjectImage,
  );

  if (items.length === 0) {
    return null;
  }

  const count = items.length;
  const isThreeLayout = count === 3;

  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-2">
      {items.map((element, index) => {
        const { src, alt, caption } = element.props;
        const isWide = isThreeLayout && index === 2;
        const wrapperClassName = isWide ? "sm:col-span-2" : "";

        return (
          <div key={`${src}-${index}`} className={wrapperClassName}>
            <AppImage
              src={src}
              alt={alt}
              caption={caption}
              width={1024}
              height={768}
              className="h-auto w-full rounded-xl object-cover"
            />
          </div>
        );
      })}
    </div>
  );
}

const mdxComponents = {
  img: ({ src, alt, width: _width, height: _height, ...rest }: MDXImageProps) => (
    <AppImage
      src={src as string}
      alt={alt ?? ""}
      width={800}
      height={450}
      className="rounded-lg"
      {...rest}
    />
  ),
  ProjectImageGallery,
  ProjectImage,
};

type ProjectMDXProps = {
  code: string;
};

export function ProjectMDX({ code }: ProjectMDXProps) {
  return <MDXContent code={code} components={mdxComponents} />;
}
