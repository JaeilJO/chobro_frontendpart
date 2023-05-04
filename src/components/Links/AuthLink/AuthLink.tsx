import Link from 'next/link';
import { AiOutlineGoogle } from 'react-icons/ai';
import { StyledAuthLink } from './AuthLink.styled';

const AuthLink = () => {
    return (
        <StyledAuthLink href={'http://localhost:4000/auth/google'}>
            <AiOutlineGoogle />
            Continue with Google
        </StyledAuthLink>
    );
};

export default AuthLink;
