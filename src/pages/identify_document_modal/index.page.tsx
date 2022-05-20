import React from 'react';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Button, Modal } from 'react-bootstrap';

import { BodyModalStyled, IineModel, ParagraphModel, ParagraphTextModel } from './index.style';

/**
 *
 * @returns Verification document page
 */

interface Props {
  show?: boolean;
  onHide: any;
  onOk?: any;
}

function MyVerticallyCenteredModal({ show, onHide, onOk }: Props) {
  const { t } = useTranslation('modal');

  return (
    <Modal className="modal-cont" show={show} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <BodyModalStyled>
        <Modal.Body>
          <ParagraphModel>{t('heading')}</ParagraphModel>
          <ParagraphTextModel>{t('paragraph')}</ParagraphTextModel>
        </Modal.Body>
        <IineModel />
        <Modal.Footer>
          <div className="col-5">
            <Button onClick={onHide}>{t('dontAllow')}</Button>
          </div>
          <div className="col-5 border-left">
            <Button onClick={onOk}>{t('ok')}</Button>
          </div>
        </Modal.Footer>
      </BodyModalStyled>
    </Modal>
  );
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['modal'])),
  },
});

export default MyVerticallyCenteredModal;
