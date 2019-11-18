// eslint-disable-next-line no-unused-vars
const {lineCount} = require("./line-count");
const filename = 'server/async-01-line-count-with-callback/line-count.js';

describe('line count', () => {
    it('for file —— line-count.js —— should be 12', async () => {
        lineCount(filename, null, (count) => {
            expect(count).toEqual(12);
        })
    });

    it('for file —— is-not-there.js —— should be problem reading file: ' +
        'is-not-there.js', async () => {
        lineCount(
            filename,
            (errMsg) => {
                expect(errMsg).toEqual('problem reading file: is-not-there.js');
            },
            (count) => {
                expect(count).toBe(12);
            }
        )
    });
});
