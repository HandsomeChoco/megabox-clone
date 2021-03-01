const getYesterDay = () => {
    const now = new Date();
    const yesterdayTimeStamp = now.setDate(now.getDate()-1)
    const yesterday = new Date(yesterdayTimeStamp);
    
    const yesterdayToString = yesterday.toISOString();
    const sliceTimeFormatFromYesterday = yesterdayToString.slice(0, 10);

    return parseInt(sliceTimeFormatFromYesterday.replace(/-/g, ''));
}

export default getYesterDay;