import React from "react";

export default function HeroBanner() {
  return (
    <section className="flex justify-center items-center py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl">
          Explore My Journey and Mentorship Stories
        </h1>
        <p className="mt-4 text-gray-600 text-base sm:text-lg">
          Dive into a gallery of posts where I share insights, experiences, and tips to help you grow in tech and community building.
        </p>
      </div>
    </section>
  );
}
