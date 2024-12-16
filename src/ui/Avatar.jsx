import Image from "next/image";

function Avatar({ src, width = 24,alt }) {
  return (
    <Image
      src={src || "/images/avatar.png"}
      width={width}
      height={width}
      className="rounded-full ring-1 ring-secondary-200"
      alt={alt}
    />
  );
}
export default Avatar;
