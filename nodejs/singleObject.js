function hello() {
    var name;
    this.setName = (thyName) => {
        name = thyName;
    }
    this.sayHello = () => {
        console.log('hello,' + name);
    }
}
// exports.hello = hello;
module.exports = hello;