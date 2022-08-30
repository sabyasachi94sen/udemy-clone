// @see https://betterprogramming.pub/next-js-reducing-bundle-size-when-using-third-party-libraries-db5407252d59
import dynamic from "next/dynamic";

import { DatePicker } from "./DatePicker";

export const DatePickerDynamic = dynamic(
  () =>
    import("./DatePicker" /* webpackChunkName: "DatePicker" */).then(
      (mod) => mod.DatePicker
    ),
  { ssr: false }
) as typeof DatePicker;
