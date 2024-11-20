import EventsList from "@/components/events-list";
import { H1 } from "@/components/h1";
import { Suspense } from "react";
import Loading from "./loading";
import { Metadata } from "next";
import { capitalize } from "@/lib/utils";
import { z } from "zod";

type Props = {
    params: {
        city: string;
    };
};

type EventsPageProps = Props & {
    searchParams: { [key: string]: string | string[] | undefined };
};

export function generateMetadata({ params }: Props) {
    const city = params.city;

    return {
        title: city === "All" ? "All Events" : `Events in ${capitalize(city)}`,
    };
}

export const EventsPage: React.FC<EventsPageProps> = async ({ params, searchParams }) => {
    const city = params.city;

    const pageNumberSchema = z.coerce.number().int().positive().optional();
    const parsedPage = pageNumberSchema.safeParse(searchParams.page);

    if (!parsedPage.success) {
        throw new Error("Invalid page number!");
    }

    return (
        <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
            <H1 className="mb-28">{city === "all" ? "All events" : `Events in ${capitalize(city)}`}</H1>
            <Suspense key={city + parsedPage.data} fallback={<Loading />}>
                <EventsList city={city} page={parsedPage.data} />
            </Suspense>
        </main>
    );
};

export default EventsPage;
