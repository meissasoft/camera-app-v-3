import StepLayout from '@/components/StepsLayout';

/**
 *
 * @returns Verification page
 */

const Verification = () => {
  return (
    <div>
      <StepLayout
        rightIcon="arrow"
        step={1}
        heading="PAN card verification"
        content="Take a picture of an identity document and upload it for verification"
      />
      <StepLayout
        rightIcon="arrow"
        step={2}
        heading="PAN card verification"
        content="Take a picture of an identity document and upload it for verification"
        isDisabled={true}
      />
      <StepLayout
        rightIcon="arrow"
        step={3}
        heading="PAN card verification"
        content="Take a picture of an identity document and upload it for verification"
        isDisabled={true}
      />
    </div>
  );
};

export default Verification;
