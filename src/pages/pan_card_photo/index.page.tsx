import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useUserMedia } from '@/hooks/useUserMedia';

import PanCardPhotos from '@/components/core/PanCardPhoto';
import {
  Canvas,
  DivMain,
  DivVideoBox,
  PanCameraStyled,
  PanDivCameraBox,
  PanCameraTextStyledWrapper,
  Background,
} from './index.styles';

/**
 *
 * @returns pan card photo page
 */

const PanCardPhoto = () => {
  const { t } = useTranslation('pan_card_photo');
  const router = useRouter();
  const CAPTURE_OPTIONS = {
    audio: false,
    video: { facingMode: 'environment' },
  };

  const mediaStream = useUserMedia(CAPTURE_OPTIONS, false);

  const videoRef = useRef(null) as any;
  const videoRef1 = useRef(null) as any;
  const photoRef = useRef(null) as any;

  const takePhoto = () => {
    const width = 314;
    const height = width / (16 / 9);
    const video = videoRef.current;
    const photo = photoRef.current as any;
    photo.width = width;
    photo.height = height;
    const ctx = photo.getContext('2d');
    ctx.drawImage(video, 0, 0, width, height);
    const dataUrl = photo.toDataURL();
    console.log('dataUrl', dataUrl);
  };

  useEffect(() => {
    if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
      videoRef.current.setAttribute('autoplay', '');
      videoRef.current.setAttribute('muted', '');
      videoRef.current.setAttribute('playsinline', '');
      videoRef.current.srcObject = mediaStream;
      videoRef.current.play();
    }
    if (mediaStream && videoRef1.current && !videoRef1.current.srcObject) {
      videoRef1.current.setAttribute('autoplay', '');
      videoRef1.current.setAttribute('muted', '');
      videoRef1.current.setAttribute('playsinline', '');
      videoRef1.current.srcObject = mediaStream;
      videoRef1.current.play();
    }
  }, [mediaStream]);

  useEffect(() => {
    setTimeout(() => {
      router.push('/signature_captured');
    }, 10000);
  }, [mediaStream]);

  return (
    <Background>
      <DivMain>
        <PanCameraStyled>
          <PanDivCameraBox ref={videoRef} playsInline muted></PanDivCameraBox>
          <Canvas ref={photoRef}></Canvas>
          <DivVideoBox ref={videoRef1} playsInline muted />
        </PanCameraStyled>
        <PanCameraTextStyledWrapper>
          <PanCardPhotos
            takePhoto={takePhoto}
            text1={t('position_the_pan_card_exactly_in_the_frame')}
            text2={t('pan_card_captured_successfully')}
            text3={t('hold_your_signature')}
          />
        </PanCameraTextStyledWrapper>
      </DivMain>
    </Background>
  );
};
export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['pan_card_photo'])),
  },
});
export default PanCardPhoto;
