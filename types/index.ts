import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    btnType?:"button" | "submit"
    textStyles?:string;
    rightIcon?:string;
    isDisabled?:boolean;
}

export interface SearchManufacturerProps {
    manufacturer:string;
    setManufacturer: ( manufacturer: string ) => void;
}

export interface CarProps {
    class:string;
    city_mpg: number;
    combination_mpg: number
    cylinders: number
    displacement: number
    drive: string
    fuel_type: string
    highway_mpg: number
    make: string
    model: string
    transmission: string
    year:number
}