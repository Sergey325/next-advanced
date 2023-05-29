"use client"

import {User} from "@prisma/client";
import useCountries from "@/app/hooks/useCountries";
import Heading from "../Heading";
import Image from "next/image"
import HeartButton from "@/app/components/HeartButton";

type Props = {
    title: string
    imageSrc: string
    locationValue: string
    id: string
    currentUser?: User | null
};

const ListingHead = ({id, imageSrc, currentUser, locationValue, title}: Props) => {
    const {getByValue} = useCountries()

    const location = getByValue(locationValue)

    return (
        <>
            <Heading
                title={title}
                subtitle={`${location?.region}, ${location?.label}`}
            />
            <div className="
                w-full
                h-[60vh]
                overflow-hidden
                rounded-xl
                relative
            ">
                <Image
                    alt="Image"
                    src={imageSrc}
                    fill
                    className="object-cover w-full"
                />
                <div className="absolute top-5 right-5">
                    <HeartButton
                        listingId={id}
                        currentUser={currentUser}
                        size={42}
                    />
                </div>
            </div>
        </>
    );
};

export default ListingHead;