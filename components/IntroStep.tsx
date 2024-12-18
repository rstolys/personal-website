import React from 'react';

// Explain how it works
const IntroStep: React.FC = ({ }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-green-600">Welcome to our Trip Planner!</h2>
      <div className="grid gap-4">
        Choose your trip for each day!
      </div>
    </div>
  );
};

export default IntroStep;

