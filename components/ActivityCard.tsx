import React from 'react';
import { Accommodation, Activity, DayOfTrip, useTripContext } from '@/context/TripContext';
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import Image from 'next/image'
import Link from 'next/link'

const ActivityCard: React.FC<{ option: Activity, currentDay: DayOfTrip }> = ({ option, currentDay }) => {
  const { tripState, addScheduleItem, removeScheduleItem, isItemInSchedule } = useTripContext();

  const itemSelected = isItemInSchedule('activity', option.name, currentDay);

  const handleSelect = () => {
    const existingItem = tripState.schedule.find(
      (item) => item.type === 'activity' && item.item.name === option.name && item.day === currentDay
    );

    if (existingItem) {
      removeScheduleItem(existingItem);
    } else {
      addScheduleItem({
        type: 'activity',
        item: option,
        day: currentDay,
      });
    }
  };

  return (
    <Card key={option.name} className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle>{option.name}</CardTitle>
        <CardDescription>{option.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image src={option.imageUrl} alt={option.name} width={300} height={200} className="rounded-md" />
      </CardContent>
      <CardFooter className="flex flex-col items-start space-y-2">
        <Button variant={itemSelected ? "default" : "outline"} onClick={handleSelect}>{itemSelected ? 'Remove Item' : 'Add to Schedule'}</Button>
        <Link href={option.externalLink} target="_blank" rel="noopener noreferrer">
          <Button variant="link">Learn More</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ActivityCard;

