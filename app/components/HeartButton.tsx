import React from 'react';
import {User} from "@prisma/client";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import useFavorite from "@/app/hooks/useFavorite";

type Props = {
    listingId: string,
    currentUser?: User | null,
    size?: number
};

const HeartButton = ({listingId, currentUser, size=28}: Props) => {
    const {hasFavorited, toggleFavorite} = useFavorite({listingId, currentUser})

    return (
        <div
            onClick={toggleFavorite}
            className="
                relative
                hover:opacity-80
                transition
                cursor-pointer
            "
        >
            <AiOutlineHeart
                size={size}
                className="
                    fill-white
                    absolute
                    -top-[2px]
                    -right-[2px]
                "
            />
            <AiFillHeart
                size={size-4}
                className={
                    hasFavorited ? "fill-rose-500" : "fill-neutral-500/70"
                }
            />
        </div>
    );
};

export default HeartButton;