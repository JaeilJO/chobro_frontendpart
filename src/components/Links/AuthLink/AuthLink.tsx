import Link from 'next/link';
import { AiOutlineGoogle } from 'react-icons/ai';
import { StyledAuthLink } from './AuthLink.styled';

const AuthLink = () => {
    return (
        <StyledAuthLink href={'#'}>
            <AiOutlineGoogle />
            Continue with Google
        </StyledAuthLink>
    );
};

export default AuthLink;
