'use client'

import React from 'react';
import { Button } from "@/components/ui/button"
import Link from 'next/link';

export default function NoPage() {
  const goToTinder = () => {
    document.location.href = "https://tinder.com"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-300 to-gray-600  p-8 text-center flex flex-col gap-y-8 items-center justify-center">
      <div className="text-5xl font-bold mb-6">
          WOOOOOOOW
      </div>
      <div className="text-sm font-bold text-center flex items-center justify-center mb-6 text-black">
        It's fine I get it
      </div>
      <div className="flex flex-row gap-x-16">
        <Link href="https://tinder.com" target="_blank" rel="noopener noreferrer">
          <Button className="ml-auto bg-gradient-to-br from-[#fd5564] to-[#ef4a75]">
            Download Tinder
          </Button>
        </Link>
      </div>
      <div className="mt-12">
        <Link href="/">
          <Button variant="link" className="ml-auto text-xs hover:bg-green-600 hover:text-white">
            I take it back!?!?!?
          </Button>
        </Link>
      </div>
    </div>
  );
}

