const http = require("http");
const os = require("os");
const process = require("process");
const url = require("url");

//! Format bytes to human-readable format
function formatBytes(bytes, decimal = 2) {
  if (bytes == 0) return "0 Bytes";
  // set base unit to 1024
  const k = 1024;
  const size = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(decimal)) + " " + size[i];
}
//? Format seconds to human redable time
function formatTime(seconds) {
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${days}d ${hours}h ${minutes}m ${remainingSeconds}s`;
}

// console.log(os.cpus()[0]);

// get CPU info
function getCPUInfo() {
  const cpus = os.cpus();
  const model = cpus[0].model;
  const cores = cpus.length;
  const architecture = os.arch();
  const loadAverage = os.loadavg();
  const uptime = os.uptime();
  return {
    model,
    cores,
    architecture,
    loadAverage,
    uptime,
  };
}

// get memory info
function getMemoryInfo() {
  const totalMemory = os.totalmem();
  const freeMemory = os.freemem();
  const usedMemory = totalMemory - freeMemory;
  const memoryUsage = (usedMemory / totalMemory) * 100;

  return {
    total: formatBytes(totalMemory),
    free: formatBytes(freeMemory),
    used: formatBytes(usedMemory),
    usage: memoryUsage.toFixed(2) + "%",
  };
}

// get os info
const getOSInfo = () => {
  const platform = os.platform();
  const type = os.type();
  const release = os.release();
  const hostname = os.hostname();
  const uptime = formatTime(os.uptime());
  return {
    type,
    platform,
    release,
    hostname,
    uptime,
  };
};

// get User info
const getUserInfo = () => {
  const userInfo = os.userInfo();
  return {
    username: userInfo.username,
    homedir: userInfo.homedir,
    shell: userInfo.shell,
  };
};

// get network info
const getNetworkInfo = () => {
  const networkInterfaces = os.networkInterfaces();
  return networkInterfaces;
};
// get process info
const getProcessInfo = () => {
  const pid = process.pid;
  const ppid = process.ppid;
  const uid = process.getuid ? process.getuid() : null;
  const gid = process.getgid ? process.getgid() : null;
  const execPath = process.execPath;
  const memoryUsage = process.memoryUsage();
  const uptime = formatTime(process.uptime());
  const cwd = process.cwd();
  return {
    pid,
    ppid,
    uid,
    gid,
    execPath,
    memoryUsage,
    uptime,
    cwd,
  };
};
console.log(getProcessInfo());

//! HTTP Server
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  res.setHeader("Content-Type", "application/json");

  if (parsedUrl.path === "/") {
    res.statusCode = 200;
    res.end(
      JSON.stringify({
        name: "System Info API",
        version: "1.0.0",
        description: "Access system information via simple JSON response",
        routes: [
          "/",
          "/cpu",
          "/memory",
          "/os",
          "/user",
          "/network",
          "/process",
        ],
      })
    );
  } else if (parsedUrl.path === "/cpu") {
    res.statusCode = 200;
    res.end(JSON.stringify(getCPUInfo(), null, 2));
  } else if (parsedUrl.path === "/memory") {
    res.statusCode = 200;
    res.end(JSON.stringify(getMemoryInfo(), null, 2));
  } else if (parsedUrl.path === "/os") {
    res.statusCode = 200;
    res.end(JSON.stringify(getOSInfo(), null, 2));
  } else if (parsedUrl.path === "/user") {
    res.statusCode = 200;
    res.end(JSON.stringify(getUserInfo(), null, 2));
  } else if (parsedUrl.path === "/network") {
    res.statusCode = 200;
    res.end(JSON.stringify(getNetworkInfo(), null, 2));
  } else if (parsedUrl.path === "/process") {
    res.statusCode = 200;
    res.end(JSON.stringify(getProcessInfo(), null, 2));
  } else {
    res.statusCode = 404;
    res.end(
      JSON.stringify({
        error: "Not Found",
      })
    );
  }
});

//! start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
