import jwt from 'jsonwebtoken';

export const isAccessTokenValid = (accessToken:string)=>{
    if(!accessToken){
        throw new Error("You don't have Token")
    }
}
interface decodedJwtType{
    exp:number,
    iat:number,
    sub:string,
    username:string
}

export const decodeJwt = async(token:string) =>{
    const decodedJwt = jwt.decode(token) as decodedJwtType
    //유효한 토큰이 아닌 경우
    if(!decodedJwt){
        throw new Error("That is not a valid format for a token.")
    }
    const decodedData = 
    {token,
        userName: decodedJwt.username,
        exp:decodedJwt.exp}
    return decodedData
}

