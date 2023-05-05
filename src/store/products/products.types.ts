import { StaticImageData } from "next/image";

export interface BasketCart {
  id: number;
  icon: StaticImageData;
  name: string;
  weight: string;
  cost: number;
  count: number;
}
