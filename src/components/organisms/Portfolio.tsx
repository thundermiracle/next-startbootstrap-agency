import PortfolioItem from '../molecules/PortfolioItem';

import PageSection from './PageSection';

import type { ComponentProps, FC } from 'react';

interface Props {
  title: string;
  subTitle: string;
  data: ComponentProps<typeof PortfolioItem>[];
}

const PortfolioItems: FC<Props> = ({ title, subTitle, data }) => {
  return (
    <PageSection id="portfolio" title={title} subTitle={subTitle} bgGray>
      <div className="flex justify-around flex-wrap">
        {data.map(({ extraInfo, ...props }) => (
          <PortfolioItem
            key={props.imageSrc}
            {...props}
            extraInfo={
              <ul>
                {extraInfo?.map((ei: string) => (
                  <li key={ei}>{ei}</li>
                ))}
              </ul>
            }
          />
        ))}
      </div>
    </PageSection>
  );
};

export default PortfolioItems;
