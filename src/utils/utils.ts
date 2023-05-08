import jwt from 'jsonwebtoken';

export const isWithin3Minutes = (targetTime) => {
    const now = new Date();
    const target = new Date(targetTime * 1000);
    const differenceInSeconds = Math.round((target.getTime() - now.getTime()) / 1000);
    const isWithin3Minutes = differenceInSeconds > 0 && differenceInSeconds <= 180;
    return isWithin3Minutes;
};

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

export const HasSpacingInPassword = (loginInformation: LoginInformationType) => {
    const password = loginInformation.password;
    if (password.match(/\s/)) {
        throw new Error('There is a space in the "Password"');
    }
};

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
export const isAccessTokenValid = (accessToken: string) => {
    if (!accessToken) {
        throw new Error("You don't have Token");
    }
};

export const decodeJwt = (token: string) => {
    const decodedJwt = jwt.decode(token) as decodedJwtType;
    const decodedData = { token, userName: decodedJwt.username, exp: decodedJwt.exp };
    return decodedData;
};

export const checkRefreshToken = (RefreshToken: string | null) => {
    if (RefreshToken === null) {
        throw new Error('RefreshToken is missing.');
    }
    return RefreshToken;
};

export const jwtDecode = (token: string) => {
    return jwt.decode(token);
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
