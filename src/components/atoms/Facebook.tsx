import SocialIcon from './SocialIcon';

import type { FC } from 'react';

interface Props {
  userName: string;
}

const Facebook: FC<Props> = ({ userName }) => (
  <SocialIcon
    href={`https://facebook.com/${userName}`}
    iconClassName="i-fa-brands-facebook"
    a11yName={`facebook of ${userName}`}
  />
);

export default Facebook;
