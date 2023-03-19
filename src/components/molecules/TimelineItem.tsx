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
    <li className="relative md:mb-100px md:min-h-170px mb-50px min-h-50px before:display-table before:content-none after:display-table after:content-none after:clear-both">
      <div className="absolute md:left-50% md:ml--92px">
        <div className="md:hw-184px hw-80px rounded-img-border bg-primary flex items-center justify-center">
          {imageContent ? (
            <h4 className="text-white whitespace-break-spaces md:text-24px text-10px mb-0">
              {imageContent}
            </h4>
          ) : (
            <div className="hw-100% relative">
              <Image
                className="rounded-full"
                fill
                src={imageSrc!}
                alt={imageAlt || header || subheader || ''}
              />
            </div>
          )}
        </div>
      </div>
      <div
        className={clsx(
          'relative md:w-41% md:pl-20px md:pb-20px pl-100px pr-20px float-right text-left',
          {
            'md:float-left md:text-right': direction === 'left',
          },
        )}
      >
        <div className="mt-0">
          {header && <h4>{header}</h4>}
          {subheader && <h4>{subheader}</h4>}
        </div>
        {content && (
          <div>
            <p className="mb-0 text-muted">{content}</p>
          </div>
        )}
      </div>
    </li>
  );
};

export default TimelineItem;
