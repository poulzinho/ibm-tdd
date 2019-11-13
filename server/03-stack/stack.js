function Stack() {
    const data = [];
    let maxItems = 10000;

    this.isEmpty = () => data.length === 0;
    this.size = () => data.length;
    this.maxItems = (max) => maxItems = max;

    this.push = (item) => {
        if ((data.length + 1) > maxItems) {
            throw new Error(`stack at capacity limit: ${maxItems}`);
        }
        data.push(item)
    };
    this.pop = () => data.pop();
}

module.exports = {Stack};
