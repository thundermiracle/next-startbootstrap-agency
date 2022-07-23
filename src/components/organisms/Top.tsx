import ImageCard from '../atoms/ImageCard';
import useSmoothScrollTo from '../../hooks/useSmoothScrollTo';

import type { FC } from 'react';

interface Props {
  header: string;
  subheader: string;
  imageSrc: string;
  jumpToAnchor: string;
  jumpToAnchorText: string;
}

const Top: FC<Props> = ({ header, subheader, imageSrc, jumpToAnchor, jumpToAnchorText }) => {
  const scrollToSection = useSmoothScrollTo(jumpToAnchor);

  let extraInfoPart;
  if (jumpToAnchor && jumpToAnchorText) {
    extraInfoPart = (
      <button type="button" className="big-btn" onClick={scrollToSection}>
        {jumpToAnchorText}
      </button>
    );
  }

  return (
    <ImageCard
      imageSrc={imageSrc}
      header={header}
      subheader={subheader}
      extraInfo={extraInfoPart}
    />
  );
};

export default Top;
