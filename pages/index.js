import { Inter } from 'next/font/google';
import React, { useEffect, useState } from "react";
import LandingPageContents from '@/components/ui/LandingPageContents';
import TwoButtonsLayout from '@/components/ui/TwoButtonsLayout';
import { useAccount } from "wagmi";

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [userWallet, setUserWallet] = useState(null); 
  const { address } = useAccount();

  // Use the 'overflow-hidden' class to prevent scrolling
  const noScrollClass = "overflow-hidden";

  return (
    <main className={noScrollClass}>
      { address ? <TwoButtonsLayout /> : <LandingPageContents /> }
    </main>
  );
}
