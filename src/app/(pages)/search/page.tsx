import { Suspense } from "react";
import Section_1 from "./Section_1";

export default function SearchPage() {
  return(
    <>
      <Suspense><Section_1/></Suspense>
    </>
  )
}