import jwt from 'jsonwebtoken';
import { TableData } from '../components/Table/Table.types';
import { v4 as uuidv4 } from 'uuid';

// 토큰이 3분 이하로 남았는지 체크 해주는 함수
export const isWithin3Minutes = (targetTime) => {
    const now = new Date();
    const target = new Date(targetTime * 1000);
    const differenceInSeconds = Math.round((target.getTime() - now.getTime()) / 1000);
    const isWithin3Minutes = differenceInSeconds > 0 && differenceInSeconds <= 180;
    return isWithin3Minutes;
};

//쿠키가 현재 비어있는지 확인해주는 함수
export const isCookieEmpty = (cookie) => {
    const cookieIsEmpty = Object.keys(cookie).length === 0;
    if (cookieIsEmpty) {
        return false;
    }
};

interface LoginInformationType {
    username: string;
    password: string;
}
interface loginStatusType {
    loginStatus: boolean;
}

// email과 password가 비어있는지 다시한번 체크해주는 함수
export const HasEmptyFileds = (loginInformation: LoginInformationType) => {
    const email = loginInformation.username;
    const password = loginInformation.password;
    if (email === '') {
        throw new Error('Empty "E-mail" Filed');
    }
    if (password === '') {
        throw new Error('Empty "Password" Filed');
    }
};

// password에 ' '(빈칸)이 있는지 확인해주는 함수
export const HasSpacingInPassword = (loginInformation: LoginInformationType) => {
    const password = loginInformation.password;
    if (password.match(/\s/)) {
        throw new Error('There is a space in the "Password"');
    }
};

// 현재 로그인 상태인지 확인해주는 함수
export const IsLoginStatusTrue = (loginStatus: loginStatusType) => {
    if (loginStatus) {
        throw new Error('Error! You are Already Logged In');
    }
};

interface decodedJwtType {
    exp: number;
    iat: number;
    sub: string;
    username: string;
}

//받은 token value를 decode해주는 것
export const decodeJwt = (token: string) => {
    const decodedJwt = jwt.decode(token) as decodedJwtType;
    const decodedData = { token, userName: decodedJwt.username, exp: decodedJwt.exp };
    return decodedData;
};

//refresh토큰이 있는지 확인해주는 것
export const checkRefreshToken = (RefreshToken: string | null) => {
    if (RefreshToken === null) {
        throw new Error('RefreshToken is missing.');
    }
    return RefreshToken;
};

export const getRefreshTokenValue = (refresh: string) => {
    const nameValuePattern = /^\s*([^=]+)=([^;]+)/;
    const match = refresh.match(nameValuePattern);
    if (!match) {
        throw new Error("Cookie don't have refreshValue");
    }
    return match[2];
};

export const calculatePercentage = (created_at: string, expiration_date: string): number => {
    let percent = 0;
    let now = new Date().setHours(0, 0, 0);
    const start = new Date(created_at as string).setHours(0, 0, 0);
    const finish = new Date(expiration_date as string).setHours(0, 0, 0);

    const totalDays = Math.floor((finish - start) / (1000 * 60 * 60 * 24)) + 1;
    const startToNow = Math.floor((now - start) / (1000 * 60 * 60 * 24)) + 1;
    percent = Math.floor((startToNow / totalDays) * 100);

    if (percent > 100) {
        percent = 100;
    }

    return percent;
};

export const makePages = (data: TableData[], NumberOfPageContent: number) => {
    let pages = [];

    for (let i = 0; i < data?.length; i += NumberOfPageContent) {
        pages.push(data.slice(i, i + NumberOfPageContent));
    }

    return { pages };
};

export const generateUniqueId = () => uuidv4();
