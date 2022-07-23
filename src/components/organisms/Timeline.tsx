import TimelineItem from '../molecules/TimelineItem';

import PageSection from './PageSection';

import type { ComponentProps, FC } from 'react';

interface Props {
  title: string;
  subTitle: string;
  data: Omit<ComponentProps<typeof TimelineItem>, 'direction'>[];
}

const Timeline: FC<Props> = ({ title, subTitle, data }) => {
  return (
    <PageSection id="about" title={title} subTitle={subTitle}>
      <ul className="p-0 relative list-none before:left-40px md:before:left-50% before:absolute before:content-none before:top-0 before:bottom-0 before:w-2px before:bg-gray-200">
        {data.map(({ imageSrc, imageAlt, imageContent, header, subheader, content }, ind) => (
          <TimelineItem
            direction={ind % 2 === 1 ? 'right' : 'left'}
            key={header || imageContent}
            imageSrc={imageSrc}
            imageAlt={imageAlt}
            header={header}
            subheader={subheader}
            content={content}
            imageContent={imageContent}
          />
        ))}
      </ul>
    </PageSection>
  );
};

export default Timeline;
