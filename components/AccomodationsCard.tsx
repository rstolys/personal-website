import React from 'react';
import { Accommodation, DayOfTrip, useTripContext } from '@/context/TripContext';
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import Image from 'next/image'
import Link from 'next/link'

const AccommodationCard: React.FC<{ option: Accommodation, currentDay: DayOfTrip }> = ({ option, currentDay }) => {
  const { tripState, addScheduleItem, removeScheduleItem, isItemInSchedule } = useTripContext();

  const itemSelected = isItemInSchedule('accommodation', option.name, currentDay);

  const handleSelect = () => {
    const existingOtherItem = tripState.schedule.find(
      (item) => item.type === 'accommodation' && item.item.name !== option.name && item.day === currentDay
    );

    const existingCurrentItem = tripState.schedule.find(
      (item) => item.type === 'accommodation' && item.item.name === option.name && item.day === currentDay
    );

    // We can only have 1 accomodation per day
    if (existingOtherItem) {
      removeScheduleItem(existingOtherItem);
    }

    if (existingCurrentItem) {
      removeScheduleItem(existingCurrentItem);
    } else {
      addScheduleItem({
        type: 'accommodation',
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

export default AccommodationCard;

