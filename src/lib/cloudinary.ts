import cloudinary from "cloudinary";
cloudinary.v2.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
export async function getImagesFromCloudinary(folder: string) {
  const results = await cloudinary.v2.search
    .expression(`folder:${folder}/*`)
    .sort_by("public_id", "desc")
    .max_results(400)
    .execute();

  return results.resources.map((resource: any, index: number) => ({
    id: index,
    public_id: resource.public_id,
    format: resource.format,
    width: resource.width,
    height: resource.height,
    created_at: resource.created_at,
  }));
}
export default cloudinary;
