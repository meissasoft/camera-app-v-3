import router from 'next/router';

import React from 'react';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { GreaterThenIcon } from '@/assets/svg/greaterthen-icon';
import Header from '@/components/core/Header';
import Button from '@/components/core/Button';

import { CardIcon } from '@/assets/svg/card-icon';
import MyCommenceCenteredModal from '@/components/CommenceVideomodel/index.page';
import {
  DivButton,
  DivDifference,
  DivMain,
  DivVerificationCardStyled,
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

const Commenceyourvideo = () => {
  const { t } = useTranslation('commence_your_video');
  const [modalShow, setModalShow] = React.useState(false);
  const document = [
    {
      name: t('Aadhaar Verification'),
      Svg: GreaterThenIcon,
    },
    {
      name: t('PAN Capture'),
      Svg: GreaterThenIcon,
    },
    {
      name: t('Live Photo'),
      Svg: GreaterThenIcon,
    },
    { name: t('Video Call (Liveness check)'), Svg: GreaterThenIcon },
  ];

  const onClickCard = () => {
    setModalShow(true);
  };
  const handleStart = () => {
    router.push('/language');
  };
  const onClicOk = () => {
    router.push('/camera_pic');
  };
  return (
    <>
      <DivMain>
        <IdentificationStyled>
          <Header isLongText onClick={onClickHeaderIcon} text={t('Commence your video KYC')} />

          <DivVerificationCardStyled>
            <CardIcon />
          </DivVerificationCardStyled>
          <IdentificationTextStyled>{t('Verify your identity')}</IdentificationTextStyled>
          <IdentificationSmallTextStyled>
            {t('Please keep your following documents handy before you proceed with your full KYC process.')}
          </IdentificationSmallTextStyled>
        </IdentificationStyled>
        <DocumentContainer>
          <StyledLine />
          {document.map((doc, id) => (
            <>
              <Row onClick={onClickCard} key={id}>
                <div className="col-1">{doc.Svg()}</div>
                <DivDifference />
                <div className="col-11">
                  <IdentifyText>{doc.name}</IdentifyText>
                </div>
              </Row>
            </>
          ))}
        </DocumentContainer>
        <DivButton>
          <Button onClick={handleStart} className="m-auto">
            Start
          </Button>
        </DivButton>
      </DivMain>
      <MyCommenceCenteredModal
        show={modalShow}
        onOk={onClicOk}
        onHide={() => setModalShow(false)}
        GreaterThenIcon={GreaterThenIcon}
        heading={t('By clicking on ‘Agree’, you hereby:')}
        paragraph1={t(
          'Acknowledge the request made by Syntizen technologies private limited to provide personal details.'
        )}
        paragraph2={t(
          'Provide my unconditional concent to access, copy and store all information there in by sharing the inofrmation.'
        )}
        paragraph3={t(
          'Also undertake I/We are authorised to do so on behalf of the requestee organisation and tkae sole and complete responsibilitity for the same.'
        )}
        Disagree={t('Disagree')}
        Agree={t('Agree')}
      />
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['commence_your_video'])),
  },
});

export default Commenceyourvideo;
