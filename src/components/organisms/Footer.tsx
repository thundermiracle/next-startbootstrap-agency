// import * as SocialIcons from 'components/SocialIcons';
import type { FC } from 'react';

interface Props {
  footer: any;
}

const Footer: FC<Props> = ({ footer }) => {
  if (!footer) {
    return null;
  }

  // const {
  //   copyright,
  //   privacyHref,
  //   privacyText,
  //   termsHref,
  //   termsText,
  //   social: { facebook, github, linkedin, medium, twitter },
  // } = frontmatter;

  return (
    <footer className="footer py-3">
      {/* <Container>
        <Row className="align-items-center text-center">
          <Col lg={5} className="text-lg-left">
            {copyright}
          </Col>
          <Col lg={3} className="my-3 my-lg-0">
            {twitter ? <SocialIcons.Twitter userName={twitter} /> : null}
            {facebook ? <SocialIcons.Facebook userName={facebook} /> : null}
            {linkedin ? <SocialIcons.Linkedin userName={linkedin} /> : null}
            {github ? <SocialIcons.Github userName={github} /> : null}
            {medium ? <SocialIcons.Medium userName={medium} /> : null}
          </Col>
          <Col lg={4} className="text-lg-right">
            <a className="mr-3" href={privacyHref}>
              {privacyText}
            </a>
            <a href={termsHref}>{termsText}</a>
          </Col>
        </Row>
      </Container> */}
    </footer>
  );
};

export default Footer;
