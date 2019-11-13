function Stack() {
    const data = [];
    this.isEmpty = () => data.length === 0;
    this.size = () => data.length;
    this.push = (item) => data.push(item);
    this.pop = () => data.pop();
}

module.exports = {Stack};
