import clsx from 'clsx';

import type { FC, ReactNode } from 'react';

interface Props {
  id: string;
  className?: string;
  title?: string;
  subTitle?: string;
  footer?: string;
  children: ReactNode;
}

const PageSection: FC<Props> = ({ id, className, title, subTitle, footer, children }) => {
  return (
    <section
      id={id}
      className={clsx('py-150px md:py-100px text-center md:px-0 px-12px', className)}
    >
      {title && <h2 className="case-upper text-40px mt-0 mb-15px">{title}</h2>}
      {subTitle && (
        <h3 className="text-muted text-16px font-400 mb-75px mt-0 font-italic">{subTitle}</h3>
      )}
      <div className="container mx-auto">{children}</div>
      {footer && (
        <div className="mx-auto md:max-w-66% w-90%">
          <p className="text-muted mb-0">{footer}</p>
        </div>
      )}
    </section>
  );
};

export default PageSection;
