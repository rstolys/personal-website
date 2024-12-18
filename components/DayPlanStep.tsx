import React from 'react';
import { DayOfTrip, useTripContext } from '@/context/TripContext';
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import Image from 'next/image'
import Link from 'next/link'
import { accommodationOptions, restaurantOptions } from '@/context/TripOptions';
import DiningCard from "@/components/DiningCard"

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
            {accommodationOptions.map((acc) => (
              <Card key={acc.name} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{acc.name}</CardTitle>
                  <CardDescription>{acc.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image src={acc.imageUrl} alt={acc.name} width={300} height={200} className="rounded-md" />
                </CardContent>
                <CardFooter className="flex flex-row items-center space-x-2">
                  <Button variant="outline">Add to Schedule</Button>
                  <Link href={acc.externalLink} target="_blank" rel="noopener noreferrer">
                    <Button variant="link">Learn More</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <h3 className="text-lg font-semibold">Activity Options</h3>
          <p>Choose what we'll do on {currentDay}</p>
          <div className="flex flex-row gap-4 overflow-x-auto">
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
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

