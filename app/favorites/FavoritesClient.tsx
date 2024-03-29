'use client'

import {SafeListing} from "@/app/types";
import {User} from "@prisma/client";
import Container from "@/app/components/Container";
import Heading from "@/app/components/Heading";
import ListingCard from "@/app/components/listings/ListingCard";

type Props = {
    listings: SafeListing[]
    currentUser?: User | null
};

const FavoritesClient = ({listings, currentUser}: Props) => {


    return (
        <Container>
            <Heading
                title="Favorites"
                subtitle="List of places you have favorited!"
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
                        currentUser={currentUser}
                        data={listing}
                    />
                ))}
            </div>
        </Container>
    );
};

export default FavoritesClient;