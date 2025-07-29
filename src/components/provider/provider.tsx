"use client";

import { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';
import {ToastContainer} from 'react-toastify'

interface Props{
  children: ReactNode;
}

export const Provider = ({children}:Props) => {
  return (
    <SessionProvider>
      <ToastContainer />
      {children}
    </SessionProvider>
  )
}
