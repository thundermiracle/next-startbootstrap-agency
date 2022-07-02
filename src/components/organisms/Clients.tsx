import Client from '../molecules/Client';

import PageSection from './PageSection';

import type { FC } from 'react';

interface Props {
  data: {
    src: string;
    alt: string;
    href?: string;
  }[];
}

const Clients: FC<Props> = ({ data }) => {
  return (
    <PageSection id="clients">
      <div className="flex flex-row flex-wrap">
        {data.map(({ src, alt, href }) => (
          <div className="my-3 md:basis-1/4 basis-1/2" key={src}>
            <Client src={src} alt={alt} href={href} />
          </div>
        ))}
      </div>
    </PageSection>
  );
};

export default Clients;
