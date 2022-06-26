import type { FC } from 'react';

interface Props {
  iconClassName: string;
}

const ServiceIcon: FC<Props> = ({ iconClassName }) => {
  return (
    <div className="rd-50% bg-primary inline-block h-32 w-32 inline-flex justify-center items-center">
      <div className={`text-16 inline-block color-white ${iconClassName}`} />
    </div>
  );
};

export default ServiceIcon;
