import Image from "next/image";

import { Head } from "@/shared/components";

export default function Home(): JSX.Element {
  return (
    <>
      <Head title="Home" />

      <div className="flex flex-col items-center justify-center py-2 min-h-screen">
        <p>Hello</p>
      </div>
    </>
  );
}

Home.isPublicRoute = true;
