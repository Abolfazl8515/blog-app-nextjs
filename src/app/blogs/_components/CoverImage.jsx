import Image from "next/image";

function CoverImage({ coverImageUrl, title }) {
  return (
    <div className="aspect-video relative overflow-hidden mb-6 rounded-md">
      <Image
        src={coverImageUrl}
        alt={title}
        fill
        className="object-cover object-center rounded-md hover:scale-110 transition-all duration-300 ease-out"
        quality={80}
      />
    </div>
  );
}

export default CoverImage;
