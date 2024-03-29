import EmptyState from "@/app/components/EmptyState";
import ClientOnly from "@/app/components/ClientOnly";
import getCurrentUser from "@/app/actions/getCurrentUser";
import getReservations from "@/app/actions/getReservations";
import TripsClient from "@/app/trips/TripsClient";


const TripsPage = async() => {
    const currentUser = await getCurrentUser()

    if(!currentUser){
        return (
            <ClientOnly>
                <EmptyState
                    title="Unauthorizes"
                    subtitle="Please login"
                />
            </ClientOnly>
        )
    }

    const reservation = await getReservations({
        userId: currentUser.id
    })

    if(reservation.length === 0){
        return (
            <ClientOnly>
                <EmptyState
                    title="No trips found"
                    subtitle="Looks like you haven't reserved any trips"
                />
            </ClientOnly>
        )
    }

    return (
        <ClientOnly>
            <TripsClient
                reservations={reservation}
                currentUser={currentUser}
            />
        </ClientOnly>
    );
};

export default TripsPage;