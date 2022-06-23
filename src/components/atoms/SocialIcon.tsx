import type { FC } from 'react';

interface Props {
  href: string;
  iconClassName: string;
  a11yName: string;
}

const SocialIcon: FC<Props> = ({ href, iconClassName, a11yName }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:cursor-pointer color-inherit"
    aria-label={a11yName}
  >
    <div aria-hidden className={`sns-icon ${iconClassName}`} />
  </a>
);

export default SocialIcon;
