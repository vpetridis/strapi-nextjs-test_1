import Imager from 'next/image'
import { getStrapiMedia } from "../helpers/media";

const Image = ({ image, style }) => {
  const imageUrl = getStrapiMedia(image);

  return (
    <img
      src={imageUrl}
      alt={image.alternativeText || image.name}
      style={style}
    />
  );
};

export default Image;