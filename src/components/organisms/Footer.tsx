import Facebook from '../atoms/Facebook';
import Github from '../atoms/Github';
import Twitter from '../atoms/Twitter';
import Linkedin from '../atoms/Linkedin';
import Medium from '../atoms/Medium';

import type { FC } from 'react';

interface Props {
  copyright: string;
  privacyHref: string;
  privacyText: string;
  termsHref: string;
  termsText: string;
  social?: {
    twitter?: string;
    facebook?: string;
    linkedin?: string;
    github?: string;
    medium?: string;
  };
}

const Footer: FC<Props> = ({
  copyright,
  privacyHref,
  privacyText,
  termsHref,
  termsText,
  social: { facebook, github, linkedin, medium, twitter } = {},
}) => {
  return (
    <footer className="py-2">
      <div className="container mx-auto">
        <div className="flex items-center flex-wrap text-center">
          <div className="md:basis-1/3 basis-1/1 md:text-right">{copyright}</div>
          <div className="my-2 md:basis-1/3 basis-1/1 text-center">
            {twitter ? <Twitter userName={twitter} /> : null}
            {facebook ? <Facebook userName={facebook} /> : null}
            {linkedin ? <Linkedin userName={linkedin} /> : null}
            {github ? <Github userName={github} /> : null}
            {medium ? <Medium userName={medium} /> : null}
          </div>
          <div className="md:basis-1/3 basis-1/1 md:text-left">
            <a className="mr-3 text-primary" href={privacyHref}>
              {privacyText}
            </a>
            <a className="text-primary" href={termsHref}>
              {termsText}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
