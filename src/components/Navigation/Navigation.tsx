import NavigationLink from '../Links/NavigationLink';

import { useRouter } from 'next/router';
import { StyledNavigation } from './Navigation.styled';
import { navigationItems } from './NavigationItems';

const Navigation = () => {
    const router = useRouter();
    let pathName = router.pathname;
    return (
        <StyledNavigation>
            {navigationItems.map((item) => (
                <NavigationLink
                    key={item.title}
                    title={item.title}
                    href={item.href}
                    pathName={pathName}
                ></NavigationLink>
            ))}
        </StyledNavigation>
    );
};

export default Navigation;
