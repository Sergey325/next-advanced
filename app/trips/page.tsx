import EmptyState from "@/app/components/EmptyState";
import ClientOnly from "@/app/components/ClientOnly";
import getCurrentUser from "@/app/actions/getCurrentUser";
import getReservation from "@/app/actions/getReservation";
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

    const reservation = await getReservation({
        userId: currentUser.id
    })

    if(!reservation){
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