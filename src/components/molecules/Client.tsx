import Image from 'next/image';

import type { FC } from 'react';

interface Props {
  src: string;
  alt: string;
  href?: string;
}

const Client: FC<Props> = ({ src, href, alt }) => {
  const imgPart = (
    <Image
      className="container mx-auto block mx-auto"
      src={src}
      alt={alt}
      width={300}
      height={75}
    />
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {imgPart}
      </a>
    );
  }

  return imgPart;
};

export default Client;
