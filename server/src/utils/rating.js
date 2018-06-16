export const calculateNewRatirng = (rate, old, ratesCount) => {
    let newRate = (((old * (ratesCount)) + rate) / (ratesCount + 1)).toFixed(2);
    ratesCount++;
    return { newRate , ratesCount};
}