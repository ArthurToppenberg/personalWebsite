import type { Metadata } from "next";
import {
  ProjectHeader,
  ProjectImage,
  ProjectImageGallery,
} from "../../components";
import { meta } from "./meta";

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
};

export default function CuboEighteenPage() {
  return (
    <>
      <ProjectHeader {...meta} />

      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <p>
          Cubo 18 is a DIY subwoofer build: an 18-inch driver housed in a birch
          plywood cube enclosure, built from cut panels to a fully painted,
          finished cabinet.
        </p>

        <ProjectImageGallery>
          <ProjectImage
            src="https://blob.arthurtoppenberg.dk/site-images/IMG_4629.avif"
            alt="Birch plywood sheets on a cart at the hardware store"
          />
          <ProjectImage
            src="https://blob.arthurtoppenberg.dk/site-images/IMG_4642.avif"
            alt="18-inch driver and cut plywood panels laid out on a workbench"
          />
          <ProjectImage
            src="https://blob.arthurtoppenberg.dk/site-images/IMG_4641.avif"
            alt="Cutting plywood panels to size on a workshop panel saw"
          />
          <ProjectImage
            src="https://blob.arthurtoppenberg.dk/site-images/IMG_4634.avif"
            alt="Enclosure panels glued and clamped together on a workbench"
          />
          <ProjectImage
            src="https://blob.arthurtoppenberg.dk/site-images/IMG_4646.avif"
            alt="Internal bracing of the enclosure viewed from above"
          />
          <ProjectImage
            src="https://blob.arthurtoppenberg.dk/site-images/IMG_4645.avif"
            alt="Close-up of the internal cavity and driver cutout"
          />
          <ProjectImage
            src="https://blob.arthurtoppenberg.dk/site-images/IMG_4651.avif"
            alt="Assembled bare plywood box with the driver cutout, before finishing"
          />
          <ProjectImage
            src="https://blob.arthurtoppenberg.dk/site-images/IMG_4616.avif"
            alt="Painted black enclosure, angled view showing the port"
          />
          <ProjectImage
            src="https://blob.arthurtoppenberg.dk/site-images/IMG_4606.avif"
            alt="Painted black enclosure standing in the garage"
          />
          <ProjectImage
            src="https://blob.arthurtoppenberg.dk/site-images/IMG_4605.avif"
            alt="Finished Cubo 18 subwoofer, front-on view"
          />
        </ProjectImageGallery>
      </article>
    </>
  );
}
