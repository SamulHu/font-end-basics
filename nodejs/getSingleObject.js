var hello = require('./singleObject');
var he = new hello();
he.setName('dicos');
he.sayHello();
var he2 = new hello();
he2.setName('pizzahut');
he2.sayHello();