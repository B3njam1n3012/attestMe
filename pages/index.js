import { Inter } from 'next/font/google'
import React, { useEffect, useState } from "react";
//import { ConnectButton } from '@rainbow-me/rainbowkit'
//import { Button } from "@/components/ui/button"
import LandingPageContents from '@/components/ui/LandingPageContents';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <LandingPageContents />
    </main>
  );
}
