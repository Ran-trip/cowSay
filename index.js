const userInfo = require(`./information`);
const cowsay = require("cowsay");


console.log(cowsay.say({
    text : ` Hello, my name is ${userInfo.name} from remote ${userInfo.campus} `,
    e : "oO",
    T : "U "
}));