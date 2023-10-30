import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string,
  rightIcon?: string,
  isDisabled?: boolean,
}

export interface CustomFilterProps {
  title: string;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManuFacturer: (manufacturer: string) => void;
}

export interface CarCardProps {
  city_mpg: number;
class:String;
combination_mpg: number;
cylinders: number;
displacement: number;
drive:String;
fuel_type:String;
highway_mpg: number;
make:String;
model:String;
transmission:String;
year: number;
}