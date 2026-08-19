import { Link as LinkIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

type ProjectHeaderProps = {
  title: string;
  description: string;
  image?: string;
  imageCaption?: string;
  href?: string;
};

export function ProjectHeader({
  title,
  description,
  image,
  imageCaption,
  href,
}: ProjectHeaderProps) {
  return (
    <>
      <header className="mb-10">
        {href && href !== "#" ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-3 flex flex-wrap items-center gap-2 text-foreground no-underline transition-opacity hover:opacity-80"
            aria-label={`${title} - View source`}
          >
            <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
            <span className="text-muted-foreground">-</span>
            <LinkIcon className="size-4 text-muted-foreground" />
          </a>
        ) : (
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
          </div>
        )}
        <p className="mb-4 text-muted-foreground">{description}</p>
      </header>

      {image && (
        <figure className="m-0 mb-10">
          <div className="overflow-hidden rounded-xl border">
            <Image
              src={image}
              alt={title}
              width={1200}
              height={630}
              loading="eager"
              fetchPriority="high"
              className="h-auto w-full rounded-xl"
            />
          </div>
          {imageCaption && (
            <figcaption className="mt-2 text-left text-xs text-muted-foreground tracking-tight">
              {imageCaption}
            </figcaption>
          )}
        </figure>
      )}
    </>
  );
}

type ProjectImageProps = {
  src: string;
  alt: string;
  caption?: string;
};

export function ProjectImage({ src, alt, caption }: ProjectImageProps) {
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

export function ProjectImageGallery({ children }: ProjectImageGalleryProps) {
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
