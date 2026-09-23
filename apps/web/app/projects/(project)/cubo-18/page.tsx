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
            src="/images/cubo-18/IMG_4629.jpg"
            alt="Birch plywood sheets on a cart at the hardware store"
          />
          <ProjectImage
            src="/images/cubo-18/IMG_4642.jpg"
            alt="18-inch driver and cut plywood panels laid out on a workbench"
          />
          <ProjectImage
            src="/images/cubo-18/IMG_4641.jpg"
            alt="Cutting plywood panels to size on a workshop panel saw"
          />
          <ProjectImage
            src="/images/cubo-18/IMG_4634.jpg"
            alt="Enclosure panels glued and clamped together on a workbench"
          />
          <ProjectImage
            src="/images/cubo-18/IMG_4646.jpg"
            alt="Internal bracing of the enclosure viewed from above"
          />
          <ProjectImage
            src="/images/cubo-18/IMG_4645.jpg"
            alt="Close-up of the internal cavity and driver cutout"
          />
          <ProjectImage
            src="/images/cubo-18/IMG_4651.jpg"
            alt="Assembled bare plywood box with the driver cutout, before finishing"
          />
          <ProjectImage
            src="/images/cubo-18/IMG_4616.jpg"
            alt="Painted black enclosure, angled view showing the port"
          />
          <ProjectImage
            src="/images/cubo-18/IMG_4606.jpg"
            alt="Painted black enclosure standing in the garage"
          />
          <ProjectImage
            src="/images/cubo-18/IMG_4605.jpg"
            alt="Finished Cubo 18 subwoofer, front-on view"
          />
        </ProjectImageGallery>
      </article>
    </>
  );
}
