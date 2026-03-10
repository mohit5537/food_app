import { useState } from "react";

function useMultiStepForm(steps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  function next() {
    setCurrentStepIndex((i) => (i < steps.length - 1 ? i + 1 : i));
  }

  function back() {
    setCurrentStepIndex((i) => (i > 0 ? i - 1 : i));
  }

  return {
    next,
    back,
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
  };
}

export default useMultiStepForm;
