// eslint-disable-next-line no-unused-vars
const {fahrenheitToCelcius} = require('./fahrenheit-2-celcius');

describe('the canary spec for fahrenheit to celsius calculator', () => {
    it('shows the infrastructure works', () => {
        expect(true).toBe(true);
    });
});

describe.only('a fahrenheitToCelcius function should', () => {
    it('return 0 for 32', () => {
        expect(fahrenheitToCelcius(32)).toEqual(0);
    });
    it.todo('return 10 for 50');
    it.todo('return 100 for 212');
});