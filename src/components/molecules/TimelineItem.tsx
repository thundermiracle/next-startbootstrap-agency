import clsx from 'clsx';
import Image from 'next/image';

import type { FC } from 'react';

interface Props {
  direction?: 'left' | 'right';
  imageContent?: string;
  imageSrc?: string;
  imageAlt?: string;
  header?: string;
  subheader?: string;
  content?: string;
}

const TimelineItem: FC<Props> = ({
  direction = 'left',
  imageSrc,
  imageAlt,
  imageContent,
  header,
  subheader,
  content,
}) => {
  return (
    <li className="list-none relative mb-100px min-h-170px">
      <div className="absolute md:left-50% ml--85px">
        <div className="hw-184px rounded-img-border bg-primary flex items-center justify-center">
          {imageContent ? (
            <h4 className="text-white whitespace-break-spaces">{imageContent}</h4>
          ) : (
            <Image
              className="rounded-full"
              src={imageSrc!}
              width={170}
              height={170}
              alt={imageAlt || header || subheader}
            />
          )}
        </div>
      </div>
      <div
        className={clsx('relative w-41% pt-20px pb-100px pr-20px', {
          'float-left text-right': direction === 'left',
          'float-right text-left': direction === 'right',
        })}
      >
        <div className="mt-0">
          {header && <h4>{header}</h4>}
          {subheader && <h4>{subheader}</h4>}
        </div>
        {content && (
          <div className="timeline-body">
            <p className="mb-0 text-muted">{content}</p>
          </div>
        )}
      </div>
    </li>
  );
};

export default TimelineItem;
