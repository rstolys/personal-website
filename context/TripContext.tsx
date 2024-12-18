import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Accommodation = {
  name: string;
  description: string;
  imageUrl: string;
  externalLink: string;
};

export type Activity = {
  name: string;
  description: string;
  imageUrl: string;
  externalLink: string;
};

export type Restaurant = {
  name: string;
  cuisine: string;
  imageUrl: string;
  externalLink: string;
};

type DaySchedule = {
    day: DayOfTrip;
    items: ScheduleItem[];
};

export type DayOfTrip = string | null;
export const ValidDays = {
    friday: 'Friday', 
    saturday: 'Saturday', 
    sunday: 'Sunday'
};

type ScheduleItem = {
  type: 'accommodation' | 'activity' | 'meal';
  item: Accommodation | Activity | Restaurant;
  day: DayOfTrip;
  time?: string;
};



type TripState = {
  schedule: ScheduleItem[];
};

type TripContextType = {
  tripState: TripState;
  addScheduleItem: (item: ScheduleItem) => void;
  removeScheduleItem: (item: ScheduleItem) => void;
  updateScheduleItemTime: (item: ScheduleItem, newTime: string) => void;
  getScheduleItemsByDay: () => DaySchedule[];
  isItemInSchedule: (type: 'accommodation' | 'activity' | 'meal', name: string, day: DayOfTrip) => boolean;
};

const TripContext = createContext<TripContextType | undefined>(undefined);

export const TripProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tripState, setTripState] = useState<TripState>({
    schedule: [],
  });

  const addScheduleItem = (item: ScheduleItem) => {
    setTripState((prev) => ({
      ...prev,
      schedule: [...prev.schedule, item],
    }));
  };

  const removeScheduleItem = (itemToRemove: ScheduleItem) => {
    setTripState((prev) => ({
      ...prev,
      schedule: prev.schedule.filter(
        (item) =>
          !(item.type === itemToRemove.type &&
            item.item.name === itemToRemove.item.name &&
            item.day === itemToRemove.day)
      ),
    }));
  };

  const updateScheduleItemTime = (itemToUpdate: ScheduleItem, newTime: string) => {
    setTripState((prev) => ({
      ...prev,
      schedule: prev.schedule.map((item) =>
        item.type === itemToUpdate.type &&
        item.item.name === itemToUpdate.item.name &&
        item.day === itemToUpdate.day
          ? { ...item, time: newTime }
          : item
      ),
    }));
  };

  const getScheduleItemsByDay = () => {
    var daySchedules: DaySchedule[] = [];
    tripState.schedule.forEach((item) => {
      var daySchedule = daySchedules.find((daySchedule) => daySchedule.day === item.day);
      if (daySchedule) {
        daySchedule.items.push(item);
      } else {
        daySchedules.push({ day: item.day, items: [item] });
      }
    });

    return daySchedules;
  };

  const isItemInSchedule = (type: 'accommodation' | 'activity' | 'meal', name: string, day: DayOfTrip) => {
    return tripState.schedule.some(
      (item) => item.type === type && item.item.name === name && item.day === day
    );
  }

  return (
    <TripContext.Provider
      value={{
        tripState,
        addScheduleItem,
        removeScheduleItem,
        updateScheduleItemTime,
        getScheduleItemsByDay,
        isItemInSchedule,
      }}
    >
      {children}
    </TripContext.Provider>
  );
};

export const useTripContext = () => {
  const context = useContext(TripContext);
  if (context === undefined) {
    throw new Error('useTripContext must be used within a TripProvider');
  }
  return context;
};

