export const isExpired = (targetTime)=>{
    const now = new Date();
    const target = new Date(targetTime*1000)
    console.log(target.getTime(),target)
    console.log(now.getTime(), now)
    console.log(target.getTime() - now.getTime(), new Date(target.getTime() - now.getTime()))
}