import { onFocus } from '@reduxjs/toolkit/dist/query/core/setupListeners';
import { AuthInputContainer, AuthLabel, StyledAuthInput } from './AuthInput.styled';
import { useCallback, useRef, useState } from 'react';

interface AuthInputProps {
    type: string;
    title: string;
    onChange: (...event: any[]) => void;
}

//onChange event handler is used for React Hook Form
const AuthInput = ({ type, title, onChange }: AuthInputProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [active, setActive] = useState(false);

    //Handler For
    const onFocus = useCallback(() => {
        setActive(true);
    }, []);
    const onBlur = useCallback(() => {
        setActive(inputRef.current?.value !== '');
    }, []);

    return (
        <AuthInputContainer>
            <StyledAuthInput
                onChange={onChange}
                required
                type={type}
                ref={inputRef}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            <AuthLabel active={active}>{title}</AuthLabel>
        </AuthInputContainer>
    );
};

export default AuthInput;
