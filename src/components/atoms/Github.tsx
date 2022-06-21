import SocialIcon from './SocialIcon';

import type { FC } from 'react';

interface Props {
  userName: string;
}

const Github: FC<Props> = ({ userName }) => (
  <SocialIcon href={`https://github.com/${userName}`} iconClassName="i-ant-design-github-filled" />
);

export default Github;
