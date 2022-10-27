import Image from 'next/image';
import { Modal, Button } from 'react-bootstrap';

import type { FC } from 'react';

interface DialogProps {
  onHide?: () => void;
  header?: string;
  subheader?: string;
  content?: string;
  extraInfo?: string;
  show?: boolean;
  imageSrc: string;
  imageAlt?: string;
}

const Dialog: FC<DialogProps> = ({
  onHide,
  header,
  subheader,
  content,
  extraInfo,
  imageSrc,
  imageAlt,
  ...restProps
}) => {
  return (
    <Modal
      {...restProps}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{header}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="mx-auto">
        <p className="item-intro text-muted">{subheader}</p>
        <Image
          width={500}
          height={400}
          src={imageSrc}
          alt={imageAlt || header || subheader || ''}
        />
        <p>{content}</p>
        {extraInfo}
      </Modal.Body>
      <Modal.Footer>
        <div className="mx-auto">
          <Button variant="primary" onClick={onHide}>
            &nbsp; Close Project
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default Dialog;
