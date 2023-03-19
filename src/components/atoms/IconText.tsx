import type { FC } from 'react';

interface Props {
  iconName: string;
  text: string;
}

const IconText: FC<Props> = ({ iconName, text }) => {
  return (
    <span className="f-center">
      <div className={`mr-5px ${iconName}`} />
      {text}
    </span>
  );
};

export default IconText;
