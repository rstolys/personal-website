import React from 'react';
import { useTripContext } from '@/context/TripContext';
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from 'next/image'
import Link from 'next/link'

const accommodations = [
  { 
    name: "Beachfront Bungalow", 
    description: "A cozy bungalow right on the beach",
    imageUrl: "/placeholder.svg?height=200&width=300",
    externalLink: "https://example.com/beachfront-bungalow"
  },
  { 
    name: "Hilltop Villa", 
    description: "A spacious villa with panoramic island views",
    imageUrl: "/placeholder.svg?height=200&width=300",
    externalLink: "https://example.com/hilltop-villa"
  },
  { 
    name: "Eco-Lodge", 
    description: "An environmentally friendly lodge in the heart of nature",
    imageUrl: "/placeholder.svg?height=200&width=300",
    externalLink: "https://example.com/eco-lodge"
  },
];

const AccommodationStep: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  const { tripState, addScheduleItem, removeScheduleItem } = useTripContext();

  const handleSelect = (acc: typeof accommodations[0], day: 'Friday' | 'Saturday' | 'Sunday') => {
    const existingItem = tripState.schedule.find(
      (item) => item.type === 'accommodation' && item.day === day
    );

    if (existingItem) {
      removeScheduleItem(existingItem);
    }

    addScheduleItem({
      type: 'accommodation',
      item: acc,
      day: day,
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-green-600">Choose Your Accommodation</h2>
      <div className="grid gap-4">
        {accommodations.map((acc) => (
          <Card key={acc.name} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{acc.name}</CardTitle>
              <CardDescription>{acc.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Image src={acc.imageUrl} alt={acc.name} width={300} height={200} className="rounded-md" />
            </CardContent>
            <CardFooter className="flex flex-col items-start space-y-2">
              <div className="flex items-center space-x-2">
                <Select onValueChange={(value) => handleSelect(acc, value as 'Friday' | 'Saturday' | 'Sunday')}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a day" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Friday">Friday</SelectItem>
                    <SelectItem value="Saturday">Saturday</SelectItem>
                    <SelectItem value="Sunday">Sunday</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline">Add to Schedule</Button>
              </div>
              <Link href={acc.externalLink} target="_blank" rel="noopener noreferrer">
                <Button variant="link">Learn More</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
      <Button onClick={onNext} className="mt-4 w-full">Next</Button>
    </div>
  );
};

export default AccommodationStep;

