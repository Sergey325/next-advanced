'use client'

import {SafeReservation} from "@/app/types";
import {User} from "@prisma/client";
import { useRouter } from "next/navigation"
import Container from "@/app/components/Container";
import Heading from "@/app/components/Heading";
import {useCallback, useState} from "react";
import axios from "axios";
import toast from "react-hot-toast";
import ListingCard from "@/app/components/listings/ListingCard";

type Props = {
    reservations: SafeReservation[],
    currentUser?: User | null
};

const ReservationsClient = ({reservations, currentUser}: Props) => {
    const router = useRouter()
    const [deletingId, setDeletingId] = useState('')

    const onCancel = useCallback((id: string) => {
        setDeletingId(id)

        axios.delete(`/api/reservations/${id}`)
            .then(() => {
                toast.success("Reservation cancelled!")
                router.refresh()
            })
            .catch(() => {
                toast.error("Something went wrong.")
            })
            .finally(() => {
                setDeletingId("")
            })
    }, [router])

    return (
        <Container>
            <Heading
                title="Reservations"
                subtitle="Bookings on your properties"
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
                {reservations.map(reservation => (
                    <ListingCard
                      key={reservation.id}
                      data={reservation.listing}
                      reservation={reservation}
                      actionId={reservation.id}
                      onAction={onCancel}
                      disabled={deletingId === reservation.id}
                      actionLabel="Cancel guest reservation"
                      currentUser={currentUser}
                    />
                ))}
            </div>
        </Container>
    );
};

export default ReservationsClient;