import Image, { type ImageProps } from "next/image";
import { assetPath } from "../lib/assetPath";

type AppImageProps = Omit<ImageProps, "src"> & { src: string };

export function AppImage({ src, ...props }: AppImageProps) {
  return <Image src={assetPath(src)} {...props} />;
}
