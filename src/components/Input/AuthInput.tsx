import { onFocus } from '@reduxjs/toolkit/dist/query/core/setupListeners';
import { AuthInputContainer, AuthLabel, StyledAuthInput } from './AuthInput.styled';
import { useCallback, useRef, useState } from 'react';

interface AuthInputProps {
    type: string;
    title: string;
    onChange: (...event: any[]) => void;
}

const AuthInput = ({ type, title, onChange }: AuthInputProps) => {
    const [active, setActive] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const onFocus = useCallback(() => {
        setActive(true);
    }, [active]);

    const onBlur = useCallback(() => {
        if (inputRef.current?.value === '') {
            setActive(false);
        } else {
            setActive(true);
        }
    }, [active]);

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
