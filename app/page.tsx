'use client'

import React, { useState } from 'react';
import { TripProvider, ValidDays } from '@/context/TripContext';
import SummaryStep from '@/components/SummaryStep';
import { Button } from "@/components/ui/button"
import Layout from '@/components/Layout';
import IntroStep from '@/components/IntroStep';
import DayPlanStep from '@/components/DayPlanStep';

const steps = [
  { component: IntroStep, title: 'Welcome to our Trip Planner!', day: null },
  { component: DayPlanStep, title: 'Friday February 14th', day: ValidDays.friday },
  { component: DayPlanStep, title: 'Saturday February 15th', day: ValidDays.saturday },
  { component: DayPlanStep, title: 'Sunday February 16th', day: ValidDays.sunday },
  { component: SummaryStep, title: 'Friday February 14th', day: null },
];

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const CurrentStepComponent = steps[currentStep].component;
  const CurrentStepTitle = steps[currentStep].title;
  const CurrentStepDay = steps[currentStep].day;

  return (
    <TripProvider>
      <Layout currentStep={currentStep + 1} totalSteps={steps.length}>
        <CurrentStepComponent title={CurrentStepTitle} currentDay={CurrentStepDay} />
        <div className="flex justify-between mt-4">
          {currentStep > 0 && (
            <Button onClick={handleBack} variant="outline">
              Back
            </Button>
          )}
          {currentStep < steps.length - 1 && (
            <Button onClick={handleNext} className="ml-auto">
              Next
            </Button>
          )}
        </div>
      </Layout>
    </TripProvider>
  );
}

