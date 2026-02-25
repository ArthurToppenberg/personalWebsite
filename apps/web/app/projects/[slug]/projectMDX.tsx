"use client";

import { MDXContent } from "@content-collections/mdx/react";
import { AppImage } from "../../components/AppImage";

type MDXImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

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
};

type ProjectMDXProps = {
  code: string;
};

export function ProjectMDX({ code }: ProjectMDXProps) {
  return <MDXContent code={code} components={mdxComponents} />;
}
