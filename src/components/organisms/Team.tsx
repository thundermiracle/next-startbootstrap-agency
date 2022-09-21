import TeamMember from '../molecules/TeamMember';

import PageSection from './PageSection';

import type { ComponentProps, FC } from 'react';

interface Props {
  title: string;
  subTitle: string;
  footer: string;
  data: ComponentProps<typeof TeamMember>[];
}

const TeamMembers: FC<Props> = ({ title, subTitle, footer, data }) => {
  return (
    <PageSection id="team" title={title} subTitle={subTitle} footer={footer} bgGray>
      <div className="flex justify-around flex-wrap">
        {data.map((props) => (
          <TeamMember key={props.imageSrc} {...props} />
        ))}
      </div>
    </PageSection>
  );
};

export default TeamMembers;
