import router from 'next/router';

import Button from '@/components/core/Button';

import { BixDiv } from './index.styles';
/**
 *
 * @returns Home page
 */
const Home = () => {
  const handleStarted = () => {
    router.push('/language');
  };
  return (
    <BixDiv>
      <div className="wrapper">
        <div className="layout">
          <h3 className="heading">Video KYC</h3>
        </div>
      </div>
      <div className="button-container">
        <Button onClick={handleStarted} className="m-auto">
          Get Started
        </Button>
      </div>
    </BixDiv>
  );
};

export default Home;
