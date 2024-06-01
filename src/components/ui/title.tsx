import { Inter } from 'next/font/google'
import React from 'react'

const interFont = Inter({ subsets: ["latin"], weight: ["400", "700"] });


export default function Title({title, subTitle}: {title: string, subTitle: string}) {
  return (
      <div className=' my-20'>
          <h2 className={`text-xl text-muted-foreground font-semibold ${interFont.className} `}>{title} </h2>
      <h3 className=' text-2xl md:text-3xl'>{subTitle} </h3> 
      <div className=' hidden md:block h-1 w-[100px] bg-accent rounded mt-2 '></div>
    </div>
  )
}
