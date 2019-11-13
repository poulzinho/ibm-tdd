function Stack() {
    const data = [];
    let maxItems = 10000;

    this.isEmpty = () => data.length === 0;
    this.size = () => data.length;

    this.capacity = (max) => {
        if (max === 0) {
            throw new Error('capacity cannot be zero');
        }
        if (max < 0) {
            throw new Error('capacity cannot be negative');
        }
        maxItems = max
    };

    this.push = (item) => {
        if ((data.length + 1) > maxItems) {
            throw new Error(`cannot push, stack at capacity limit: ${maxItems}`);
        }
        data.push(item)
    };

    this.pop = () => {
        if (data.length === 0) {
            throw new Error('cannot pop, stack is empty');
        }
        return data.pop()
    };
}

module.exports = {Stack};
