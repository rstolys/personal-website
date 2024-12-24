import React from 'react';

// Explain how it works
const IntroStep: React.FC = ({ }) => {
  return (
    <div className='text-center'>
      <h2 className="text-2xl font-semibold mb-4 text-green-600">Welcome to our Trip Planner!</h2>
      <div className="flex flex-col gap-y-8">
        <div>
          For each day, there will be a number of options to choose from for accomodation, dining and activities. You can select one or more options from each category and once you are happy, can proceed to the next day.
        </div>
        <div>
          At the end you will get a printable itinerary for our trip!
        </div>
        <div>
          Click <b>Next</b> to get started.
        </div>
      </div>
    </div>
  );
};

export default IntroStep;

