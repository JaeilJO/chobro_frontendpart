export const isLoggedIn = (loginState:boolean) =>{
    if(loginState){
        throw new Error('already logged in')
    }
}
