const findPrimeFactors = (number) => {
    let factors = [];
    for (let divisor = 2; number > 1; divisor += 1) {
        for(; number % divisor === 0; number /= divisor) factors.push(divisor);
    }
    return factors;
};

module.exports = {findPrimeFactors};
