import router from 'next/router';

import { useEffect, useRef, useState } from 'react';

import { DoneIcon } from '@/assets/svg/done-icon';
import CameraBottomWithButton from '@/components/core/CameraBottomWithButton';

import {
  DivCameraBox,
  DiveDone,
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
  const [isDone, setIsDone] = useState(false);
  const [videoBlob, setVideoBlob] = useState('');

  const videoRef = useRef(null);
  const mediaRecorder: any = useRef(null);
  const blobsRecorded: any = [];

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: { width: 1920, height: 1080 },
      })
      .then((stream) => {
        const video = videoRef.current as any;
        video.srcObject = stream;
        video.play();
        mediaRecorder.current = new MediaRecorder(stream, { mimeType: 'video/webm' });
        mediaRecorder.current.addEventListener('dataavailable', function (e: any) {
          blobsRecorded.push(e.data);
        });
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

  const handleRetake = () => {};

  const startVideoRecording = () => {
    setIsDone(false);
    mediaRecorder.current.start(1000);
    setTimeout(stop, 3000);
  };

  const stop = () => {
    mediaRecorder.current.stop();
    setVideoBlob(URL.createObjectURL(new Blob(blobsRecorded, { type: 'video/webm' })));
    setIsDone(true);
  };

  console.log('videoBlob', videoBlob, 'mediaRecorder', mediaRecorder);
  return (
    <>
      <DivMain>
        {/* <video width="320" height="240" controls>
          <source src="blob:http://localhost:3000/61dcde36-327b-4d82-9d33-d3e187b54d5a" type="video/mp4" />
        </video> */}
        <VerificationStyled>
          <DivCameraBox background={isDone}>
            <Video ref={videoRef} isDone={isDone}></Video>
            <DiveDone>{isDone && <DoneIcon />}</DiveDone>
          </DivCameraBox>
          <VerificationTextStyled>Position your face</VerificationTextStyled>
          <VerificationSmallTextStyled>
            Keep your face within the oval to <br /> start recording and follow the instructions
          </VerificationSmallTextStyled>
        </VerificationStyled>
        <CameraBottomWithButton isVideo onClick={startVideoRecording} onCancel={handleCancel} onReTake={handleRetake} />
      </DivMain>
    </>
  );
};

export default Verification;
