//Style
import { useState } from 'react';
import { logout } from '../../../redux/features/userSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { useLogoutQuery } from '../../../redux/services/authApi';
import { StyledAvatarModalButton } from './AvatarModalButton.styled';

//Types
import { AvatarModalButtonProps } from './AvatarModalButton.types';

const AvatarModalButton = ({ title }: AvatarModalButtonProps) => {
    // const [shouldFetch, setShouldFetch] = useState(false);
    // //redux
    // const dispatch = useAppDispatch();
    // const accessToken = useAppSelector((state) => state.user.token);
    // const { isSuccess, refetch } = useLogoutQuery(accessToken);

    // //logout
    // const logoutHandler = async () => {
    //     if (!shouldFetch) {
    //         setShouldFetch(true);
    //     }
    //     await refetch();
    //     if (isSuccess) {
    //         dispatch(logout());
    //     }
    // };

    return <StyledAvatarModalButton>{title}</StyledAvatarModalButton>;
};

export default AvatarModalButton;
