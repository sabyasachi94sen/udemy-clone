

import Image from "next/image";

import { Button } from "@/shared/components";

interface HomeItemsProps{
  [key: string]: any;
  activityname: string;
  activitystatus: status;
  image: any;
}


export function HomeItems({ activityname,activitystatus ,image }:  HomeItemsProps){

    return (
      <div className="w-[35%] h-[24vh] bg-cyan-100 rounded-lg flex ml-7 items-center justify-center" >
        <div className="w-[60%] h-[20vh]" >
          <h1 className="text-black  font-extrabold font-sans text-lg mt-6">{activityname}</h1>
          <h4 className="text-black font-medium font-sans mt-1">{activitystatus}</h4>
           <Button className="w-[50%] h-[5vh] text-cyan-400 bg-yellow-100 rounded-lg mt-5 cursor-pointer">Know more</Button>
        </div>
        <div className="h-[24vh] w-[30%]  mt-6">
        <Image src={image} />
        </div>
      </div>
    )
}