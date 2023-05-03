import { StaticImageData } from "next/image";

export interface BasketCart {
  icon: StaticImageData;
  name: string;
  weight: string;
  cost: Number;
  count: Number;
}
