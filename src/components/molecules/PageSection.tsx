import clsx from 'clsx';

import type { FC, ReactNode } from 'react';

interface Props {
  id: string;
  className?: string;
  children: ReactNode;
}

const PageSection: FC<Props> = ({ id, className, children }) => {
  return (
    <section id={id} className={clsx('py-150px md:py-100px', className)}>
      <div className="container mx-auto">{children}</div>
    </section>
  );
};

export default PageSection;
