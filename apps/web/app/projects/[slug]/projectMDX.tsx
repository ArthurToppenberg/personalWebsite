import { MDXContent } from "@content-collections/mdx/react";
import Image from "next/image";
import React from "react";

type MDXImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

type ProjectImageProps = {
  src: string;
  alt: string;
  caption?: string;
};

function ProjectImage({ src, alt, caption }: ProjectImageProps) {
  const image = (
    <Image
      src={src}
      alt={alt}
      width={1024}
      height={768}
      className="h-auto w-full rounded-xl object-cover"
    />
  );

  if (!caption) {
    return image;
  }

  return (
    <figure className="m-0">
      {image}
      <figcaption className="mt-2 text-left text-xs text-muted-foreground tracking-tight">
        {caption}
      </figcaption>
    </figure>
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
            <ProjectImage src={src} alt={alt} caption={caption} />
          </div>
        );
      })}
    </div>
  );
}

const mdxComponents = {
  img: ({
    src,
    alt,
    width: _width,
    height: _height,
    ...rest
  }: MDXImageProps) => (
    <Image
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
