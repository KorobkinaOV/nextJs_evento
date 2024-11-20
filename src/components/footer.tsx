import Link from "next/link";

const routes = [
    {
        name: "Terms & Conditions",
        path: "/terms-conditions",
    },
    {
        name: "Privacy policy",
        path: "/privacy-policy",
    },
];

export const Footer = () => {
    return (
        <footer className="mt-auto flex justify-between items-center h-16 border-t border-white/10 px-3 sm:px-9 text-xs text-white/25">
            <small className="text-xs">&copy; All rights reserved.</small>

            <ul className="flex gap-x-3 sm:gap-x-8">
                {routes.map(({ path, name }) => (
                    <li key={path}>
                        <Link href={path}>{name}</Link>
                    </li>
                ))}
            </ul>
        </footer>
    );
};

export default Footer;
