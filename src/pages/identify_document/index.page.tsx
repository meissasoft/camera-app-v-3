import router from 'next/router';

import React from 'react';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { DriverLincenceIcon } from '@/assets/svg/driver-lincence-icon';
import { GreaterThenIcon } from '@/assets/svg/greaterthen-icon';
import { IdCardIcon } from '@/assets/svg/id-card-icon';
import { PassportIcon } from '@/assets/svg/passport-icon';
import { VoterIcon } from '@/assets/svg/voter-icon';
import Header from '@/components/core/Header';

import MyVerticallyCenteredModal from '../identify_document_modal/index.page';
import {
  DivGreaterIcon,
  DivMain,
  DocumentContainer,
  IdentificationSmallTextStyled,
  IdentificationStyled,
  IdentificationTextStyled,
  IdentifyText,
  Row,
  StyledLine,
} from './index.style';

/**
 *
 * @returns Verification document page
 */

const onClickHeaderIcon = () => {
  router.push('/verification');
};

const IdentityDocument = () => {
  const { t } = useTranslation('identity_document');
  const [modalShow, setModalShow] = React.useState(false);
  const document = [
    {
      name: t('adhaarcard'),
      Svg: IdCardIcon,
    },
    {
      name: t('passport'),
      Svg: PassportIcon,
    },
    {
      name: t('licence'),
      Svg: DriverLincenceIcon,
    },
    { name: t('voterid'), Svg: VoterIcon },
  ];

  const onClickCard = () => {
    setModalShow(true);
  };
  const onClicOk = () => {
    router.push('/camera_pic');
  };
  return (
    <>
      <DivMain>
        <IdentificationStyled>
          <Header isLongText onClick={onClickHeaderIcon} text={t('header')} />
          <IdentificationTextStyled>{t('heading')}</IdentificationTextStyled>
          <IdentificationSmallTextStyled>{t('headingParagraph')}</IdentificationSmallTextStyled>
        </IdentificationStyled>
        <DocumentContainer>
          {document.map((doc, id) => (
            <>
              <Row onClick={onClickCard} key={id}>
                <div className="col-1">{doc.Svg()}</div>
                <div className="col-10">
                  <IdentifyText>{doc.name}</IdentifyText>
                </div>
                <DivGreaterIcon className="col-1">
                  <GreaterThenIcon />
                </DivGreaterIcon>
              </Row>
              {id + 1 === document.length ? '' : <StyledLine />}
            </>
          ))}
        </DocumentContainer>
      </DivMain>
      <MyVerticallyCenteredModal show={modalShow} onOk={onClicOk} onHide={() => setModalShow(false)} rout={'modal'} />
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['identity_document'])),
  },
});

export default IdentityDocument;
