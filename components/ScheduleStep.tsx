import React from 'react';
import { useTripContext } from '@/context/TripContext';
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const ScheduleStep: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  const { tripState, updateScheduleItemTime } = useTripContext();

  const days = ['Friday', 'Saturday', 'Sunday'];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-green-600">Review and Adjust Your Schedule</h2>
      {days.map((day) => (
        <Card key={day} className="mb-4">
          <CardHeader>
            <CardTitle>{day}</CardTitle>
          </CardHeader>
          <CardContent>
            {tripState.schedule
              .filter((item) => item.day === day)
              .map((item, index) => (
                <div key={index} className="flex items-center space-x-2 mb-2">
                  <Input
                    type="time"
                    defaultValue={item.time || ''}
                    onChange={(e) => updateScheduleItemTime(item, e.target.value)}
                  />
                  <span>{item.item.name} ({item.type})</span>
                </div>
              ))}
          </CardContent>
        </Card>
      ))}
      <Button onClick={onNext} className="w-full">Next</Button>
    </div>
  );
};

export default ScheduleStep;

