import Image from 'next/image';

import Twitter from '../atoms/Twitter';
import Facebook from '../atoms/Facebook';
import Github from '../atoms/Github';
import Linkedin from '../atoms/Linkedin';
import Medium from '../atoms/Medium';

import type { FC } from 'react';

interface Props {
  imageSrc: string;
  imageAlt?: string;
  header: string;
  subheader: string;
  social?: {
    twitter?: string;
    facebook?: string;
    linkedin?: string;
    github?: string;
    medium?: string;
  };
}

const TeamMember: FC<Props> = ({
  imageSrc,
  imageAlt,
  header,
  subheader,
  social: { twitter, facebook, linkedin, github, medium } = {},
}) => {
  const twitterPart = twitter && <Twitter userName={twitter} />;
  const facebookPart = facebook && <Facebook userName={facebook} />;
  const linkedinPart = linkedin && <Linkedin userName={linkedin} />;
  const githubPart = github && <Github userName={github} />;
  const mediumPart = medium && <Medium userName={medium} />;

  return (
    <div className="flex flex-col text-center items-center max-w-440px px-4 mb-50px">
      <div className="hw-239px rounded-img-border">
        <div className="hw-225px relative">
          <Image
            fill
            className="rounded-full "
            src={imageSrc}
            alt={imageAlt || header || subheader}
          />
        </div>
      </div>
      <h4 className="mt-25px mb-0 transform-none">{header}</h4>
      <p className="mt-0 text-muted">{subheader}</p>
      <div className="flex gap-2">
        {twitterPart}
        {facebookPart}
        {linkedinPart}
        {githubPart}
        {mediumPart}
      </div>
    </div>
  );
};

export default TeamMember;
