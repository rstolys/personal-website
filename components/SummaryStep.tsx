import React from 'react';
import { useTripContext, ScheduleItem, TypeSchedule, Accommodation, Activity, Restaurant } from '@/context/TripContext';
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import Link from 'next/link'

// TODO: Need to arrange this schedule in a way that is printable as an itenary
// -- Ideally it just lists the accomodation, activities and dining names along with the description and external link, we can drop the name
// -- This will make it easier to print and read than having images  

const SummaryStep: React.FC = () => {
  const { getScheduleItemsByDay } = useTripContext();

  const handlePrint = () => {
    window.print();
  };


  const groupScheduleItemsByType = (scheduledItems: ScheduleItem[]) => {
    const typeSchedules: TypeSchedule[] = [];
    scheduledItems.forEach((item) => {
      const typeSchedule = typeSchedules.find((typeSchedule) => typeSchedule.type === item.type);
      console.log(item, typeSchedule == null)
      if (typeSchedule) {
        typeSchedule.items.push(item);
      } else {
        typeSchedules.push({ type: item.type, items: [item] });
      }
    });

    console.log(typeSchedules);

    return typeSchedules;
  };

  const getDescriptionOfItem = (item: Accommodation | Activity | Restaurant) => {
    if ('description' in item) {
      return item.description;
    } else if ('cuisine' in item) {
      return item.cuisine;
    } else {
      return '';
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-green-600">Our Island Getaway Summary</h2>
      {getScheduleItemsByDay().map((scheduleByDay) => (
        <Card key={scheduleByDay.day} className="mb-4">
          <CardHeader>
            <CardTitle>{scheduleByDay.day}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='flex flex-col gap-y-8'>
              {groupScheduleItemsByType(scheduleByDay.items).map((typeSchedule, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold">{typeSchedule.type.toUpperCase()}</h3>
                  <div className='flex flex-col gap-4'>
                    {typeSchedule.items.map((item, index) => (
                      <div key={index} className="border-2 border-gray-200 p-4 rounded-md min-w-[200px]">
                        <p className="font-semibold">{item.item.name}</p>
                        <p className="text-sm text-gray-500">{getDescriptionOfItem(item.item)}</p>
                        <Link href={item.item.externalLink} target="_blank" rel="noopener noreferrer">
                          <Button variant="link" className="p-0 h-auto text-wrap">{item.item.externalLink.slice(0,50)}</Button>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}          
            </div>
          </CardContent>
        </Card>
      ))}
      <Button onClick={handlePrint} className="w-full">Print / Save as PDF</Button>
    </div>
  );
};

export default SummaryStep;

