import { NavigationLinkStyled } from './NavigationLink.styled';

interface NavigationLinkProps {
    title: string;
    href: string;
    pathName: string;
}

const NavigationLink = ({ title, href, pathName }: NavigationLinkProps) => {
    let active = pathName === href ? true : false;
    return (
        <NavigationLinkStyled href={href} $active={active}>
            {title}
        </NavigationLinkStyled>
    );
};

export default NavigationLink;
