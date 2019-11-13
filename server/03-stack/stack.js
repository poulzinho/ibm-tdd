function Stack() {
    const data = [];
    this.isEmpty = () => data.length === 0;
    this.size = () => data.length;
    this.push = (item) => data.push(item);
}

module.exports = {Stack};
