import React from 'react';
import { DayOfTrip, Restaurant, useTripContext } from '@/context/TripContext';
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import Image from 'next/image'
import Link from 'next/link'

const DiningCard: React.FC<{ option: Restaurant, currentDay: DayOfTrip }> = ({ option, currentDay }) => {
  const { tripState, addScheduleItem, removeScheduleItem, isItemInSchedule } = useTripContext();

  const itemSelected = isItemInSchedule('meal', option.name, currentDay);

  const handleSelect = () => {
    const existingItem = tripState.schedule.find(
      (item) => item.type === 'meal' && item.item.name === option.name && item.day === currentDay
    );

    if (existingItem) {
      removeScheduleItem(existingItem);
    } else {
      addScheduleItem({
        type: 'meal',
        item: option,
        day: currentDay,
      });
    }
  };

  return (
    <Card key={option.name} className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle>{option.name}</CardTitle>
        <CardDescription>{option.cuisine}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image src={option.imageUrl} alt={option.name} width={300} height={200} className="rounded-md object-cover w-[300px] h-[200px]" />
      </CardContent>
      <CardFooter className="flex flex-row items-center space-x-2">
        <Button variant={itemSelected ? "default" : "outline"} onClick={handleSelect}>{itemSelected ? 'Remove Item' : 'Add to Schedule'}</Button>
        <Link href={option.externalLink} target="_blank" rel="noopener noreferrer">
          <Button variant="link">Learn More</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default DiningCard;

