"use client"

import {User} from "@prisma/client";
import Container from "@/app/components/Container";
import Heading from "@/app/components/Heading";
import {useRouter} from "next/navigation";
import {useCallback, useState} from "react";
import axios from "axios";
import toast from "react-hot-toast";
import ListingCard from "@/app/components/listings/ListingCard";
import {SafeListing} from "@/app/types";

type Props = {
    listings: SafeListing[],
    currentUser?: User | null
};

const PropertiesClient = ({currentUser, listings}: Props) => {
    const router = useRouter()
    const [deletingId, setDeletingId] = useState("")

    const onCancel = useCallback((id: string) => {
        setDeletingId(id)
        axios.delete(`/api/listing/${id}`)
            .then(() => {
                toast.success("Listing deleted")
                router.refresh()
            })
            .catch((error) => {
                toast.error(error?.response?.data?.error)
            })
            .finally(() => {
                setDeletingId("")
            })
    }, [router])

    return (
        <Container>
            <Heading
                title="Propetries"
                subtitle="List of your propetries"
            />
            <div className="
                mt-10
                grid grid-cols-1
                sm:grid-cols-2
                md:grid-cols-3
                lg:grid-cols-4
                xl:grid-cols-5
                2xl:grid-cols-6
                gap-8
            ">
                {listings.map(listing => (
                    <ListingCard
                        key={listing.id}
                        data={listing}
                        actionId={listing.id}
                        onAction={onCancel}
                        disabled={deletingId === listing.id}
                        actionLabel="Delete propetry"
                        currentUser={currentUser}
                    />
                ))}
            </div>
        </Container>
    );
};

export default PropertiesClient;