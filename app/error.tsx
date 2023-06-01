"use client"

import { useEffect } from "react";
import EmptyState from "@/app/components/EmptyState";

type Props = {
    error: Error
}

const Error = ({error}: Props) => {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <EmptyState
            title="Oh"
            subtitle="Something went wrong"
        />
    );
};

export default Error;