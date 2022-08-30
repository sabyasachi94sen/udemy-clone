// @see https://betterprogramming.pub/next-js-reducing-bundle-size-when-using-third-party-libraries-db5407252d59
import dynamic from "next/dynamic";

import { Select } from "./Select";

export const SelectDynamic = dynamic(
  () =>
    import("./Select" /* webpackChunkName: "Select" */).then(
      (mod) => mod.Select
    ),
  { ssr: false }
) as typeof Select;
