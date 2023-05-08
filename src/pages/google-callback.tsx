import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAppDispatch } from '../redux/hooks';
import { setUser } from '../redux/features/userSlice';
import { decodeJwt } from '../utils/utils';

const GoogleCallback = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (!router.isReady) return;

        const accessToken = router.query.accessToken as string;

        const decodedAccessToken = decodeJwt(accessToken);

        dispatch(
            setUser({
                data: {
                    token: decodedAccessToken.token,
                    exp: decodedAccessToken.exp,
                    userName: decodedAccessToken.userName,
                },
            })
        );

        router.replace('/active');
    }, [router.isReady]);

    return <div></div>;
};

export default GoogleCallback;
