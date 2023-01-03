import { CourseContent } from "@/features/home";
import { Provider } from "react-redux";

import store from "../store";


import { Udemy } from "./udemy";


export default function Home(): JSX.Element {
  return <Udemy />
    

}

Home.isPublicRoute = true;
