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
        }).toThrowError(`stack at capacity limit: ${maxItems}`);
    });
    it.todo('throw underflow error when popping an empty stack');
    it.todo('pops the same one item when pushed');
    it.todo('pops two items with the most recent first');
    it.todo('accepts only a positive capacity');
});
