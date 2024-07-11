import { Url } from "next/dist/shared/lib/router/router";

export interface ICardItem{
  image: string,
  title: string,
  link?: Url,
  desc: string
}