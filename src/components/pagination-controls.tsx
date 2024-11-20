import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

type PaginationControlsProps = {
    nextPath: string;
    previousPath: string;
};

const linkStyles =
    "white-text gap-x-2 flex items-center px-5 py-3 bg-white/5 opacity-75 hover:opacity-100 transition-sm rounded-md";

export const PaginationControls: React.FC<PaginationControlsProps> = ({ previousPath, nextPath }) => {
    return (
        <section className="flex justify-between gap-5 w-full ">
            {previousPath ? (
                <Link href={previousPath} className={linkStyles}>
                    <ArrowLeftIcon />
                    Prev
                </Link>
            ) : (
                <div />
            )}
            {nextPath ? (
                <Link href={nextPath} className={linkStyles}>
                    Next
                    <ArrowRightIcon />
                </Link>
            ) : (
                <div />
            )}
        </section>
    );
};
