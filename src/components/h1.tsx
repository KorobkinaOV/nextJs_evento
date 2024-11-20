import { cn } from "@/lib/utils";

type H1Props = {
    children: React.ReactNode;
    className?: string;
};

export const H1: React.FC<H1Props> = ({ children, className }) => {
    return <h1 className={cn("text-3xl lg:text-6xl font-bold tracking-tight", className)}>{children}</h1>;
};
