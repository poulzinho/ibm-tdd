// eslint-disable-next-line no-unused-vars
const {lineCount} = require("./line-count");
const filename = 'server/async-01-line-count-with-callback/line-count.js';

describe('line count can be checked', () => {
    it('with the done parameter like with a callback', (done) => {
        lineCount(filename).then((count) => {
            expect(count).toEqual(12);
        });
        done();
    });

    it.todo('by returning the promise after .then');

    it.todo('by using resolves');

    it.todo('by using async/await');
});
