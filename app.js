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

  console.log(
    model,
    " - ",
    cores,
    " - ",
    architecture,
    " - ",
    loadAverage,
    " - ",
    uptime
  );

  return {
    model,
    cores,
    architecture,
    loadAverage,
    uptime,
  };
}
console.log(getCPUInfo());

// get memory info
function getMemoryInfo() {
  const totalMemory = os.totalmem();
  const freeMemory = os.freemem();
  const usedMemory = totalMemory - freeMemory;
  const memoryUsage = (usedMemory / totalMemory) * 100;

  console.log(
    formatBytes(totalMemory),
    " - ",
    formatBytes(freeMemory),
    " - ",
    formatBytes(usedMemory),
    " - ",
    memoryUsage.toFixed(2) + "%"
  );

  return {
    total: formatBytes(totalMemory),
    free: formatBytes(freeMemory),
    used: formatBytes(usedMemory),
    usage: memoryUsage.toFixed(2) + "%",
  };
}
getMemoryInfo();

// get os info
const getOSInfo = () => {
  const platform = os.platform();
  const type = os.type();
  const release = os.release();
  const hostname = os.hostname();
  const uptime = formatTime(os.uptime());

  console.log("OS Info: ");

  console.log({
    type,
    platform,
    release,
    hostname,
    uptime,
  });
};
getOSInfo();

// get User info
// get network info
// get process info
//! Get HTTP info
