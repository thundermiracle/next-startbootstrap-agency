import SocialIcon from './SocialIcon';

import type { FC } from 'react';

interface Props {
  userName: string;
}

const Linkedin: FC<Props> = ({ userName }) => (
  <SocialIcon
    href={`https://linkedin.com/in/${userName}`}
    iconClassName="i-ant-design-linkedin-filled"
    a11yName={`linkedin of ${userName}`}
  />
);

export default Linkedin;
