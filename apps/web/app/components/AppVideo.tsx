import type { VideoHTMLAttributes } from "react";

type AppVideoSource = {
  src: string;
  type: string;
};

type AppVideoProps = Omit<VideoHTMLAttributes<HTMLVideoElement>, "src"> & {
  src?: string;
  sources?: AppVideoSource[];
};

export function AppVideo({ src, sources, ...props }: AppVideoProps) {
  return (
    <video {...(src ? { src } : {})} {...props}>
      {sources?.map((source) => (
        <source key={source.src} src={source.src} type={source.type} />
      ))}
    </video>
  );
}
