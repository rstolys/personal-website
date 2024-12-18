import React from 'react';
import { useTripContext } from '@/context/TripContext';
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import Image from 'next/image'
import Link from 'next/link'

const SummaryStep: React.FC = () => {
  const { tripState, getScheduleItemsByDay } = useTripContext();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-green-600">Your Island Getaway Summary</h2>
      {getScheduleItemsByDay().map((scheduleByDay) => (
        <Card key={scheduleByDay.day} className="mb-4">
          <CardHeader>
            <CardTitle>{scheduleByDay.day}</CardTitle>
          </CardHeader>
          <CardContent>
            {scheduleByDay.items.map((item, index) => (
              <div key={index} className="mb-2">
                <p className="font-semibold">{item.time} - {item.item.name}</p>
                <p className="text-sm text-gray-500">{item.type}</p>
                <Image src={item.item.imageUrl} alt={item.item.name} width={200} height={150} className="rounded-md mt-2" />
                <Link href={item.item.externalLink} target="_blank" rel="noopener noreferrer">
                  <Button variant="link" className="p-0 h-auto">Learn More</Button>
                </Link>
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
      <Button onClick={handlePrint} className="w-full">Print / Save as PDF</Button>
    </div>
  );
};

export default SummaryStep;

