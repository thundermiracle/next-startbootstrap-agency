import SocialIcon from './SocialIcon';

import type { FC } from 'react';

interface Props {
  userName: string;
}

const Twitter: FC<Props> = ({ userName }) => (
  <SocialIcon
    href={`https://twitter.com/${userName}`}
    iconClassName="i-ant-design-twitter-circle-filled"
    a11yName={`twitter of ${userName}`}
  />
);

export default Twitter;
