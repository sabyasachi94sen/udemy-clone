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
      <div className="col-span-6 flex cursor-pointer justify-between rounded-md bg-primary bg-opacity-50 px-4 py-6 transition-all hover:bg-opacity-80 hover:shadow-lg">
        <div>
          <h1 className="font-sans text-lg font-extrabold">{activityname}</h1>
          <h4 className="mt-1 font-sans text-sm">{activitystatus}</h4>
          {/* <button className="w-[50%] h-[5vh] text-cyan-400 bg-white rounded-lg mt-5 cursor-pointer">Know more</button> */}
        </div>
        <div className="mt-6 ">
          <Image className="drop-shadow-md" src={image} />
        </div>
      </div>
    </Link>
  );
}

// h-[20vh]  w-[30%]
