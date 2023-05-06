export const calculatePercentage = (created_at: string, expiration_date: string): number => {
    let percent = 0;
    let now = new Date().setHours(0, 0, 0);
    const start = new Date(created_at as string).setHours(0, 0, 0);
    const finish = new Date(expiration_date as string).setHours(0, 0, 0);

    console.log(now, start, finish);

    const totalDays = Math.floor((finish - start) / (1000 * 60 * 60 * 24)) + 1;
    const startToNow = Math.floor((now - start) / (1000 * 60 * 60 * 24)) + 1;
    percent = Math.floor((startToNow / totalDays) * 100);

    if (percent > 100) {
        percent = 100;
    }

    return percent;
};
