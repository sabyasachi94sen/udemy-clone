import Image from "next/future/image";
import Link from "next/link";

interface HomeItemsProps {
  [key: string]: any;
  activityname: string;
  activitystatus: string;
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
      <div className="col-span-6 flex cursor-pointer justify-around rounded-md bg-[#55aaff]  text-white px-6 py-6 transition-all hover:bg-opacity-80 hover:shadow-lg rounded-[30vw]">
      <div className="bg-white w-[80px] h-[80px] flex items-center justify-center rounded-[50%]">
          <Image className="w-[3vw] h-[6vh] relative items-center" src={image} />
        </div>
        <div className="w-[35%] mt-3">
          <h1 className="font-sans text-sm font-extrabold text-white">{activityname}</h1>
          <h4 className="mt-1 font-sans text-sm break-words">{activitystatus}</h4>
          {/* <button className="w-[50%] h-[5vh] text-cyan-400 bg-white rounded-lg mt-5 cursor-pointer">Know more</button> */}
        </div>
        
      </div>
    </Link>
  );
}

// h-[20vh]  w-[30%]
