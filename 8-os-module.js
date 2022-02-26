const os=require('os')
//Get current user information
const user=os.userInfo()
console.log(user)
//Methods to print system uptime in seconds
console.log(` System uptime: ${os.uptime()} SECONDS`)
const osDetails=
{
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem: os.freemem()
}
console.log('osDetails:',osDetails)