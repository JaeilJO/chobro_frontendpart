//Style
import { useState } from 'react';
import { logout } from '../../../redux/features/userSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { useLogoutQuery } from '../../../redux/services/authApi';
import { StyledAvatarModalButton } from './AvatarModalButton.styled';

//Types
import { AvatarModalButtonProps } from './AvatarModalButton.types';








const AvatarModalButton = ({ title }: AvatarModalButtonProps) => {
    const [shouldFetch, setShouldFetch] = useState(false)
    const dispatch = useAppDispatch()
    const isLoggedIn = useAppSelector(state=>state.user.isLoggedIn)
    const TokenExp = useAppSelector(state => state.user.exp)
    const accessToken = useAppSelector(state=>state.user.token)
    const {isSuccess,refetch} = useLogoutQuery(accessToken)
    const logoutHandler = async() =>{
        //기간이 얼마나 남았는가?
        if(!shouldFetch){
            setShouldFetch(true)
        }
        await refetch()
        if(isSuccess){
            dispatch(logout())
        }
    }
    console.log(accessToken)
    return <StyledAvatarModalButton onClick={logoutHandler}>{title}</StyledAvatarModalButton>;
};

export default AvatarModalButton;
