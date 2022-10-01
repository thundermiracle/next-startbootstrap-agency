import clsx from 'clsx';
import Link from 'next/link';
import { NavDropdown } from 'react-bootstrap';

import IconText from './IconText';

import type { FC } from 'react';

interface Props {
  langKey?: string;
  langTextMap?: Record<string, string>;
}

const LanguageSelector: FC<Props> = ({
  langKey = 'en',
  langTextMap = {
    en: 'English',
  },
}) => {
  return (
    <>
      <NavDropdown
        title={<IconText iconName="i-fa-globe" text={langTextMap[langKey]} />}
        id="language-dropdown"
        className="color-white hover:color-primary mt-5px md:mt-0 md:ml-12px"
        color="primary"
      >
        {Object.keys(langTextMap).map((key) => {
          return (
            <Link key={key} href="/" locale={key}>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a className={clsx('dropdown-item', { active: key === langKey })}>
                {langTextMap[key]}
              </a>
            </Link>
          );
        })}
      </NavDropdown>
    </>
  );
};

export default LanguageSelector;
