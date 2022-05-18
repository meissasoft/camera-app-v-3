import router from 'next/router';

import { useEffect, useRef, useState } from 'react';

import CameraBottomWithButton from '@/components/core/CameraBottomWithButton';

import {
  Canvas,
  DivCameraBox,
  DivMain,
  VerificationSmallTextStyled,
  VerificationStyled,
  VerificationTextStyled,
  Video,
} from './index.styles';

/**
 *
 * @returns Verification page
 */

const Verification = () => {
  const [isFront, setIsFront] = useState(true);
  const [cardFront, setcardFront] = useState('');
  const [cardBack, setcardBack] = useState('');

  const videoRef = useRef(null);
  const photoRef = useRef(null);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: { width: 1920, height: 1080 },
      })
      .then((stream) => {
        const video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.log('Error', err);
      });
  };
  useEffect(() => {
    getVideo();
  }, [videoRef]);

  const handleCancel = () => {
    router.push('/verification');
  };
  const handleRetake = () => {
    setIsFront(true);
  };
  const takePhoto = () => {
    const width = 314;
    const height = width / (16 / 9);
    const video = videoRef.current;
    const photo = photoRef.current;
    photo.width = width;
    photo.height = height;
    const ctx = photo.getContext('2d');
    ctx.drawImage(video, 0, 0, width, height);
    const dataUrl = photo.toDataURL();
    if (cardFront.length < 5) {
      setcardFront(dataUrl);
    } else {
      setcardBack(dataUrl);
    }
    setIsFront(false);
    if (cardFront.length > 5 && cardBack.length > 5) {
      router.push('/aadhaar_card');
    }
  };
  return (
    <>
      <DivMain>
        <VerificationStyled>
          <DivCameraBox>
            <Video ref={videoRef}></Video>
            <Canvas ref={photoRef}></Canvas>
          </DivCameraBox>
          <VerificationTextStyled>{isFront ? 'Front' : 'Back'} of the card</VerificationTextStyled>
          <VerificationSmallTextStyled>
            Position the {isFront ? 'Front' : 'Back'} of the card in the frame
          </VerificationSmallTextStyled>
        </VerificationStyled>
        <CameraBottomWithButton onClick={takePhoto} onCancel={handleCancel} onReTake={handleRetake} />
      </DivMain>
    </>
  );
};

export default Verification;
