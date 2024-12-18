import React, { ReactNode } from 'react';
import { Progress } from "@/components/ui/progress"

type LayoutProps = {
  children: ReactNode;
  currentStep: number;
  totalSteps: number;
};

const Layout: React.FC<LayoutProps> = ({ children, currentStep, totalSteps }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-green-100 p-8">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6">
            <h1 className="text-3xl font-bold text-center mb-6 text-pink-600">
                Ryan + Riley's Trip Planner
            </h1>
            <Progress value={(currentStep / totalSteps) * 100} className="mb-6" />
            {children}
        </div>
    </div>
  );
};

export default Layout