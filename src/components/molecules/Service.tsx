import ServiceIcon from '../atoms/ServiceIcon';

import type { FC } from 'react';

interface Props {
  className?: string;
  iconClassName: string;
  header: string;
  content: string;
}

const Service: FC<Props> = ({ className = '', iconClassName, header, content }) => {
  return (
    <div className={`flex flex-col text-center items-center ${className}`}>
      <ServiceIcon iconClassName={iconClassName} />
      <h3 className="my-15px case-normal">{header}</h3>
      <p className="text-muted">{content}</p>
    </div>
  );
};

export default Service;
