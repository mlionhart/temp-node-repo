const os = require("os");

// info about current user
const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime} seconds`);

const currentOS = {
  name: os.type(),
  version: os.version(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMem: os.freemem(),
  hostName: os.hostname(),
  cpuArch: os.arch(),
  cpus: os.cpus(),
  homeDir: os.homedir(),
  netInterfaces: os.networkInterfaces(),
  userInfo: os.userInfo(),
};

console.log(currentOS);
