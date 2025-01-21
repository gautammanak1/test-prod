import cloudinary from "cloudinary";
import HeroBanner from "@/components/PastEvents/HeroSection";
import ImageGrid from "@/components/PastEvents/ImageGrid";
import type { ImageProps } from "@/lib/types";


// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Function to fetch images from Cloudinary
async function getImagesFromCloudinary(folder: string) {
  const results = await cloudinary.v2.search
    .expression(`folder:${folder}/*`)
    .max_results(400)
    .execute();

  return results.resources
    .sort((a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    .map((resource: any, index: number) => ({
      id: index,
      public_id: resource.public_id,
      format: resource.format,
      width: resource.width,
      height: resource.height,
      created_at: resource.created_at,
    }));
}

export default async function PastEventsPage() {
  const folder = process.env.CLOUDINARY_FOLDER || "";
  const images: ImageProps[] = await getImagesFromCloudinary(folder);

  return (
    <main className="mx-auto max-w-7xl px-6 lg:px-8  mt-32">
      <HeroBanner  />
      <ImageGrid images={images} />
    </main>
  );
}
