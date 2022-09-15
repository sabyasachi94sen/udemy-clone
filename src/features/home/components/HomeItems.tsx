import Image from "next/image";
import Link from "next/link";
import { Button } from "@/shared/components";

interface HomeItemsProps {
  [key: string]: any;
  activityname: string;
  activitystatus: status;
  image: any;
  url: string;
}

export function HomeItems({
  activityname,
  activitystatus,
  image,
  url,
}: HomeItemsProps) {
  return (
    <Link href={url}>
      <div className="relative ml-7 mt-4 flex h-[30vh] w-[35%] cursor-pointer items-center justify-center rounded-lg bg-cyan-100">
        <div className="h-[20vh] w-[60%]">
          <h1 className="font-sans  text-lg font-extrabold text-black">
            {activityname}
          </h1>
          <h4 className="mt-1 font-sans font-medium text-black">
            {activitystatus}
          </h4>
          {/* <button className="w-[50%] h-[5vh] text-cyan-400 bg-white rounded-lg mt-5 cursor-pointer">Know more</button> */}
        </div>
        <div className="mt-6 h-[24vh]  w-[30%]">
          <Image src={image} />
        </div>
      </div>
    </Link>
  );
}
