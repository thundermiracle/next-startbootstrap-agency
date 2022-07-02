import Service from '../molecules/Service';

import PageSection from './PageSection';

import type { ComponentProps, FC } from 'react';

interface Props {
  title: string;
  subTitle: string;
  data: ComponentProps<typeof Service>[];
}

const Services: FC<Props> = ({ title, subTitle, data }) => {
  return (
    <PageSection id="services" title={title} subTitle={subTitle}>
      <div className="flex justify-around flex-wrap">
        {data.map(({ iconClassName, header, content }) => (
          <Service
            key={iconClassName}
            className="md:basis-1/3 basis-1/1 max-w-440px px-4"
            iconClassName={iconClassName}
            header={header}
            content={content}
          />
        ))}
      </div>
    </PageSection>
  );
};

export default Services;
