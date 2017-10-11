var name;
exports.setName = (thyName) => {
    name = thyName;
}
exports.sayHello = () => {
    console.log('hello ' + name);
}