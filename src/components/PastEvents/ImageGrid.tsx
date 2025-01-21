"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Masonry from "react-masonry-css";
import type { ImageProps } from "@/lib/types";

const ImageGrid = ({ images }: { images: ImageProps[] }) => {
  const lastViewedPhotoRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const breakpointColumnsObj = {
    default: 3, 
    1024: 2,   
    576: 1,    
  };

  return (
    <main className="mx-auto max-w-[1800px]  px-4 py-8">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex w-auto gap-4"
        columnClassName="masonry-column"
      >
        {images.map(({ public_id, format }, index) => (
          <div
            key={public_id}
            ref={index === 0 ? lastViewedPhotoRef : null}
            className="group relative block w-full cursor-pointer overflow-hidden rounded-lg"
            onClick={() =>
              setSelectedImage(
                `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_1920/${public_id}.${format}`
              )
            }
          >
            <div className="relative">
              <Image
                alt="Event photo"
                className="rounded-lg object-cover w-full mt-6"
                src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_920/${public_id}.${format}`}
                width={720}
                height={480}
                sizes="(max-width: 576px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </div>
        ))}
      </Masonry>
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative">
            <Image
              alt="Selected Event photo"
              src={selectedImage}
              width={1920}
              height={1080}
              className="rounded-lg object-contain max-w-full max-h-screen "
            />
            <button
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default ImageGrid;
