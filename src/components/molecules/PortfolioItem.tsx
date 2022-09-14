import React from 'react';
import Image from 'next/image';

import type { FC } from 'react';

interface Props {
  imageSrc: string;
  imageAlt?: string;
  header: string;
  subheader: string;
  // content?: string;
  // imageFileNameDetail?: string;
  // imageAltDetail?: string;
  // extraInfo?: any;
}

const PortfolioItem: FC<Props> = ({
  imageSrc,
  imageAlt,
  header,
  subheader,
  // content,
  // imageFileNameDetail,
  // imageAltDetail,
  // extraInfo,
}) => {
  return (
    <div className="m-0 md:basis-1/3 basis-1/1 max-w-400px max-h-410px bg-white mb-30px">
      <div aria-hidden="true" onClick={() => {}} className="relative cursor-pointer block">
        <Image
          className="img-fluid"
          layout="responsive"
          width={400}
          height={300}
          src={imageSrc}
          alt={imageAlt || header || subheader}
        />
        <div className="absolute top-0 hw-100% opacity-0 transition ease duration-500 bg-primary hover:opacity-90 f-center">
          <div className="i-fa-plus text-white hw-35px" />
        </div>
      </div>
      <div className="max-w-400px my-0 mx-auto p-25px text-center b-white">
        <h4 className="m-0 transform-none">{header}</h4>
        {subheader ? <p className="m-0 text-16px text-muted">{subheader}</p> : null}
      </div>
    </div>
  );
};

export default PortfolioItem;
