

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/shared/components";

interface HomeItemsProps{
  [key: string]: any;
  activityname: string;
  activitystatus: status;
  image: any;
  url: string
}


export function HomeItems({ activityname,activitystatus ,image,url }:  HomeItemsProps){

    return (
      <Link href={url}>
      <div className="w-[35%] h-[30vh] bg-cyan-100 rounded-lg flex ml-7 mt-4 relative items-center justify-center cursor-pointer" >
        <div className="w-[60%] h-[20vh]" >
          <h1 className="text-black  font-extrabold font-sans text-lg">{activityname}</h1>
          <h4 className="text-black font-medium font-sans mt-1">{activitystatus}</h4>
           {/* <button className="w-[50%] h-[5vh] text-cyan-400 bg-white rounded-lg mt-5 cursor-pointer">Know more</button> */}
        </div>
        <div className="h-[24vh] w-[30%]  mt-6">
        <Image src={image} />
        </div>
      </div>
      </Link>
    )
}