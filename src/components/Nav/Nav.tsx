import { type Link } from "../../types/nav";

type Props = {
    links: Link[];
}

export const Nav = ({ links }: Readonly<Props>) => {
    return (
        <nav>
            <ul>
                {links.map(link => 
                    <li>
                        <a id={link.id} href={link.href}>{link.label}</a>
                    </li>
                )}
            </ul>
        </nav>
    )
};
