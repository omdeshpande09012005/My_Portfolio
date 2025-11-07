/**
 * MDX Image Component
 * Image with caption support for MDX
 */

export const MDXImage = ({ src, alt, caption, width, height }) => {
  return (
    <figure className="my-8">
      <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800">
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto"
          loading="lazy"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-sm text-gray-600 dark:text-gray-400 text-center italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default MDXImage;
