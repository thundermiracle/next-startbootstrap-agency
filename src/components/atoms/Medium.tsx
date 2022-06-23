import SocialIcon from './SocialIcon';

import type { FC } from 'react';

interface Props {
  userName: string;
}

const Medium: FC<Props> = ({ userName }) => (
  <SocialIcon
    href={`https://medium.com/@${userName}`}
    iconClassName="i-ant-design-medium-circle-filled"
    a11yName={`medium of ${userName}`}
  />
);

export default Medium;
