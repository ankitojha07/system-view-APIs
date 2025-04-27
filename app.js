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
  const remainingSeconds = seconds % 60;
  return `${days}d ${hours}h ${minutes}m ${remainingSeconds}s`;
}

console.log(os.cpus());

// get CPU info
function getCPUInfo() {
  const cpus = os.cpus();
  const cpuInfo = cpus.map((cpu) => {
    return {
      model: cpu.model,
      speed: cpu.speed,
      times: cpu.times,
    };
  });
  return cpuInfo;
}
// get memory info
// get os info
// get User info
// get network info
// get process info
//! Get HTTP info
