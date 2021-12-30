const os = require('os')

// info bout cur usr
const user = os.userInfo()
console.log(user)

console.log(`system uptine is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS)