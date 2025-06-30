const fs = require('fs');

console.log("🔍 Validating Expo SDK package versions...");

const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

const expoPackages = [
  "expo-av",
  "expo-camera",
  "expo-font",
  "expo-haptics",
  "expo-linear-gradient",
  "expo-splash-screen",
  "expo-status-bar",
  "expo-web-browser",
  "expo-router"
];

let issues = 0;

expoPackages.forEach(pkgName => {
  const version = pkg.dependencies?.[pkgName];
  if (version && (!version.startsWith('~') || !/^[0-9]/.test(version))) {
    console.warn(`⚠️  ${pkgName} has version "${version}". Please run: expo install ${pkgName}`);
    issues++;
  }
});

if (issues === 0) {
  console.log("✅ All Expo packages use compatible versions.");
} else {
  console.log(`❗ Found ${issues} incompatible package version(s). Fix by using \`expo install\`.`);
  process.exitCode = 1;
}
