import NavigationLink from '../Links/NavigationLink';
import StyledNavigation from './Navigation.styled';
import LoginButton from '../Buttons/LoginButton';
import { useRouter } from 'next/router';

const navigationItems = [
    {
        title: 'Active',
        href: '/active',
    },
    { title: 'Inactive', href: '/inactive' },
];

const Navigation = () => {
    const router = useRouter();
    let pathName = router.pathname;
    return (
        <StyledNavigation>
            {navigationItems.map((item) => (
                <NavigationLink title={item.title} href={item.href} pathName={pathName}></NavigationLink>
            ))}
        </StyledNavigation>
    );
};

export default Navigation;
