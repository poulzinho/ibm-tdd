const {Stack} = require("./stack");

describe('the stack canary spec', () => {
    it('shows the infrastructure works', () => {
        expect(true).toBe(true);
    });
});

describe('a stack', () => {
    let stack;
    beforeEach(() => {
        stack = new Stack();
    });

    it('starts empty', () => {
        expect(stack.isEmpty()).toBeTruthy();
    });
    it('starts with stack size of 0', () => {
        expect(stack.size()).toEqual(0);
    });
    it('is not empty when pushed', () => {
        stack.push('a');
        expect(stack.isEmpty()).toBeFalsy();
    });
    it('stack size is 1 when pushed', () => {
        stack.push('a');
        expect(stack.size()).toBe(1);
    });
    it('stack is empty when pushed and popped', () => {
        stack.push('a');
        stack.pop();
        expect(stack.isEmpty()).toBeTruthy();
    });
    it('stack size is 0 when pushed and popped', () => {
        stack.push('a');
        stack.pop();
        expect(stack.size()).toBe(0);
    });
    it('throws overflow error when pushing to a stack at full capacity', () => {
        const maxItems = 1000;
        stack.maxItems(maxItems);

        Array(maxItems).fill('a').forEach((item) => {
            stack.push(item);
        });

        expect(() => {
            stack.push('b');
        }).toThrowError(`cannot push, stack at capacity limit: ${maxItems}`);
    });
    it('throw underflow error when popping an empty stack', () => {
        expect(() => {
            stack.pop();
        }).toThrowError('cannot pop, stack is empty');
    });
    it('pops the same one item when pushed', () => {
        const item = 'a';
        stack.push(item);
        expect(stack.pop()).toEqual(item);
    });
    it('pops two items with the most recent first', () => {
        const first = 'first';
        const second = 'second';

        stack.push(first);
        stack.push(second);

        expect(stack.pop()).toEqual(second);
        expect(stack.pop()).toEqual(first);
    });
    it.todo('accepts only a positive capacity');
});
