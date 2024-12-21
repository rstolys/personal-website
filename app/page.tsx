'use client'

import React from 'react';
import { Button } from "@/components/ui/button"
import Link from 'next/link';

export default function MainPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-pink-100  p-8 text-center flex flex-col gap-y-8 items-center justify-center">
      <div className="text-5xl font-bold mb-6">
          <span className="text-red-600">Merry</span>&nbsp;<span className="text-green-600">Christmas</span>&nbsp;<span className="text-pink-600">Riley</span>
      </div>
      <div className="text-2xl font-bold text-center flex items-center justify-center mb-6 text-black">
        Would you like to go to Gibson Island with me on February 14th, 2024?
      </div>
      <div className="flex flex-row gap-x-16">
        <Link href="/riley">
          <Button className="ml-auto bg-gradient-to-br hover:bg-gradient-to-tl from-green-400 to-red-400 text-black hover:text-white">
            Lets Go!
          </Button>
        </Link>
        <Link href="/no">
          <Button variant="outline" className="ml-auto hover:bg-red-600 hover:text-white">
            F*ck That (aka NO)
          </Button>
        </Link>
      </div>
    </div>
  );
}

