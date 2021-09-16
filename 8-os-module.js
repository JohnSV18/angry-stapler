const { O_DIRECT } = require('constants');
const os = require('os')

//info about current user

const user = os.userInfo()
console.log(user);

// method returns the system uptime in seconds
console.log(`The Systm Uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)