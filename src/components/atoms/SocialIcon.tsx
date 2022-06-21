import type { FC } from 'react';

interface Props {
  href: string;
  iconClassName: string;
}

const SocialIcon: FC<Props> = ({ href, iconClassName }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:cursor-pointer color-inherit"
  >
    <div className={`sns-icon ${iconClassName}`} />
  </a>
);

export default SocialIcon;
