"use client"

import {IconType} from "react-icons";

type Props = {
    label: string
    icon: IconType
    selected?: boolean
    onClick: (value: string) => void
};

const CategoryInput = ({label, icon: Icon, selected, onClick}: Props) => {

    return (
        <div
            onClick={() =>  onClick(label)}
            className={`
                rounded-xl
                border-2 hover:border-black
                p-4
                flex flex-col
                gap-3
                transition
                cursor-pointer
                ${selected ? 'border-black' : "border-neutral-200"}
            `}
        >
            <Icon  size={30}/>
            <div className="font-semibold ">
                {label}
            </div>
        </div>
    );
};

export default CategoryInput;