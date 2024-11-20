import { H1 } from "@/components/h1";
import { ImageResponse } from "next/og";

export const runtime = "edge";

// Image metadata
export const alt = "Evento";
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image({ params }: { params: { slug: string } }) {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <section
                style={{
                    fontSize: 128,
                    background: "white",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <H1>{params.slug}</H1>
                <p>Evento - Browse events around you</p>
            </section>
        )
    );
}
