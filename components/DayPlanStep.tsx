import React from 'react';
import { DayOfTrip, useTripContext } from '@/context/TripContext';
import { accommodationOptions, activityOptions, restaurantOptions } from '@/context/TripOptions';
import DiningCard from "@/components/DiningCard"
import AccommodationCard from '@/components/AccomodationsCard';
import ActivityCard from '@/components/ActivityCard';

const DayPlanStep: React.FC<{ title: string, currentDay: DayOfTrip }> = ({ title, currentDay }) => {
  const { tripState, addScheduleItem, removeScheduleItem } = useTripContext();

  const handleSelect = (acc: typeof accommodationOptions[0]) => {
    const existingItem = tripState.schedule.find(
      (item) => item.type === 'accommodation' && item.day === currentDay
    );

    if (existingItem) {
      removeScheduleItem(existingItem);
    }

    addScheduleItem({
      type: 'accommodation',
      item: acc,
      day: currentDay,
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-green-600">{title}</h2>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-y-2">
          <h3 className="text-lg font-semibold">Accommodation Options</h3>
          <p>Choose where we'll stay on {currentDay} night.</p>
          <div className="flex flex-row gap-4 overflow-x-auto">
            {accommodationOptions.map((option) => (
              AccommodationCard({ option: option, currentDay: currentDay })
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <h3 className="text-lg font-semibold">Activity Options</h3>
          <p>Choose what we'll do on {currentDay}</p>
          <div className="flex flex-row gap-4 overflow-x-auto">
            {activityOptions.map((option) => (
              ActivityCard({ option: option, currentDay: currentDay })
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <h3 className="text-lg font-semibold">Dinner Options</h3>
          <p>Choose what we'll eat on {currentDay}.</p>
          <div className="flex flex-row gap-4 overflow-x-auto">
            {restaurantOptions.map((option) => (
              DiningCard({ option: option, currentDay: currentDay })
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayPlanStep;

