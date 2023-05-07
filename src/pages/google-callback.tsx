import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAppDispatch } from '../redux/hooks';
import { setToken } from '../redux/features/userSlice';

const GoogleCallback = () => {
    const router = useRouter()
    const dispatch = useAppDispatch()
    useEffect(()=>{
        if (!router.isReady) return;
        
        const {accessToken} = router.query
        
        dispatch(setToken({token:accessToken}))
        router.replace('/active')
    },[router.isReady])
    
    
return <div>Hello</div>
};

export default GoogleCallback;
