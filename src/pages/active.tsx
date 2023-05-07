import Header from '../components/Layouts/Header/Header';
import Main from '../components/Layouts/Main/Main';
import { wrapper } from '../redux/store';
import { setToken } from '../redux/features/userSlice';
import { authApi } from '../redux/services/authApi';
import { useEffect } from 'react';
import { useAppSelector } from '../redux/hooks';
import { isExpired } from './utils/utils';


const Active = () => {
    const accessTokenExpiration:number = useAppSelector(state=> state.user.tokenExp)
    
    //access Token이 유효한가?

    useEffect(()=>{
        isExpired(accessTokenExpiration)
         
        
    },[])


    return (
        <>
            <Header />
            <Main />
        </>
    );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
    const cookie = context.req.cookies;

    const cookieIsEmpty = Object.keys(cookie).length === 0;
    //쿠키가 존재하지 않는다면
    if (cookieIsEmpty) {
        
    await store.dispatch(authApi.endpoints.refresh.initiate(cookie.rt)).then(async(res)=>{
        const accessToken = await res.data?.token
        const refreshToken = await res.data?.RefreshTokenValue
        
        const exp =res.data.exp
        console.log(exp)
       await store.dispatch(setToken({ token: accessToken, exp: res.data.exp, userName: res.data.userName }));
        
        const newRefreshToken = await refreshToken
        
        await context.res.setHeader('Set-Cookie', `rt=${newRefreshToken}`);
    }).catch((err)=>{console.error(err)})
        
    }
    //그 쿠키가 rt가 아니라면
    if (cookie.rt === undefined) {
        return {
            props: {},
        };
    }

        
        
    

    
        
    

    

   

    return {
        props: {},
    };
});

export default Active;
