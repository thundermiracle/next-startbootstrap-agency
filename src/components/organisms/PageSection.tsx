import clsx from 'clsx';

import type { FC, ReactNode } from 'react';

interface Props {
  id: string;
  className?: string;
  title?: string;
  titleSeparator?: boolean;
  subTitle?: string;
  footer?: string;
  bgGray?: boolean;
  children: ReactNode;
}

const PageSection: FC<Props> = ({
  id,
  className,
  title,
  titleSeparator,
  subTitle,
  footer,
  bgGray,
  children,
}) => {
  return (
    <section
      id={id}
      className={clsx('py-150px md:py-100px text-center md:px-0 px-12px', className, {
        'bg-gray100': bgGray,
      })}
    >
      <div className="container mx-auto">
        {title && <h2 className="case-upper text-40px mt-0 mb-15px">{title}</h2>}
        {titleSeparator && <hr className="my-4" />}
        {subTitle && (
          <h3 className="text-muted text-16px font-400 mb-75px mt-0 italic font-serif">
            {subTitle}
          </h3>
        )}
        <div className="container mx-auto">{children}</div>
        {footer && (
          <div className="mx-auto md:max-w-66% w-90%">
            <p className="text-muted mb-0">{footer}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PageSection;
