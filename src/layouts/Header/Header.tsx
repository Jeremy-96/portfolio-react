import { Nav } from '../../components/Nav/Nav';
import { links } from './Header.conf';
import './Header.css';

export const Header = () => {
    return (
        <header>
            <Nav links={links}/>
        </header>
    )
};
