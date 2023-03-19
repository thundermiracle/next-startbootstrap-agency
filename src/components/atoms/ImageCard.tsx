import clsx from 'clsx';
import Image from 'next/image';

import type { FC } from 'react';

interface Props {
  className?: string;
  imageSrc: string;
  imageAlt?: string;
  header: string;
  subheader: string;
  extraInfo: any;
  priority?: boolean;
}

const ImageCard: FC<Props> = ({
  className,
  imageSrc,
  imageAlt,
  header,
  subheader,
  extraInfo,
  priority = false,
}) => {
  return (
    <div className={clsx('relative bg-dark text-white text-center', className)}>
      <div className="h-491px md:h-759px">
        <Image
          className="object-cover"
          priority={priority}
          fill
          src={imageSrc}
          alt={imageAlt || header || subheader}
        />
      </div>
      <div className="overlay">
        <div className="container h-100% mx-auto flex items-center justify-center">
          <div className="pt-300px pb-200px">
            <div className="italic text-22px font-serif md:text-40px">{subheader}</div>
            <div className="uppercase mb-30px font-700 text-50px md:text-75px">{header}</div>
            {extraInfo}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
