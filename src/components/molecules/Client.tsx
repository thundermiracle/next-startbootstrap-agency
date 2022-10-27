import Image from 'next/image';

import type { FC } from 'react';

interface Props {
  src: string;
  alt: string;
  href?: string;
}

const Client: FC<Props> = ({ src, href, alt }) => {
  const imgPart = (
    <div className="h-75px w-300px relative">
      <Image className="container mx-auto block mx-auto" fill src={src} alt={alt} />
    </div>
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
