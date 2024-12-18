import React from 'react';
import { useTripContext } from '@/context/TripContext';
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from 'next/image'
import Link from 'next/link'

const activities = [
  { 
    name: "Snorkeling", 
    description: "Explore the vibrant coral reefs",
    imageUrl: "/placeholder.svg?height=200&width=300",
    externalLink: "https://example.com/snorkeling"
  },
  { 
    name: "Hiking", 
    description: "Trek through lush tropical forests",
    imageUrl: "/placeholder.svg?height=200&width=300",
    externalLink: "https://example.com/hiking"
  },
  { 
    name: "Beach Yoga", 
    description: "Relax with yoga sessions on the beach",
    imageUrl: "/placeholder.svg?height=200&width=300",
    externalLink: "https://example.com/beach-yoga"
  },
  { 
    name: "Kayaking", 
    description: "Paddle through crystal-clear waters",
    imageUrl: "/placeholder.svg?height=200&width=300",
    externalLink: "https://example.com/kayaking"
  },
];

const ActivitiesStep: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  const { tripState, addScheduleItem, removeScheduleItem } = useTripContext();

  const handleSelect = (activity: typeof activities[0], day: 'Friday' | 'Saturday' | 'Sunday') => {
    const existingItem = tripState.schedule.find(
      (item) => item.type === 'activity' && item.item.name === activity.name && item.day === day
    );

    if (existingItem) {
      removeScheduleItem(existingItem);
    } else {
      addScheduleItem({
        type: 'activity',
        item: activity,
        day: day,
      });
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-green-600">Choose Your Activities</h2>
      <div className="grid gap-4">
        {activities.map((activity) => (
          <Card key={activity.name} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{activity.name}</CardTitle>
              <CardDescription>{activity.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Image src={activity.imageUrl} alt={activity.name} width={300} height={200} className="rounded-md" />
            </CardContent>
            <CardFooter className="flex flex-col items-start space-y-2">
              <div className="flex items-center space-x-2">
                <Select onValueChange={(value) => handleSelect(activity, value as 'Friday' | 'Saturday' | 'Sunday')}>
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
              <Link href={activity.externalLink} target="_blank" rel="noopener noreferrer">
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

export default ActivitiesStep;

