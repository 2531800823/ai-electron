const config = {
  $schema:
    "https://raw.githubusercontent.com/electron-userland/electron-builder/master/packages/app-builder-lib/scheme.json",
  appId: "YourAppID",
  asar: true,
  productName: "myApp",
  directories: {
    output: "release/${version}",
  },
  files: ["dist", "dist-electron"],
  mac: {
    target: ["dmg"],
    artifactName: "${productName}-Mac-${version}-Installer.${ext}",
  },
  win: {
    target: [
      {
        target: "nsis",
        arch: ["x64"],
      },
    ],
    artifactName: "${productName}123-Windows-${version}-Setup.${ext}",
  },
  nsis: {
    oneClick: false,
    perMachine: false,
    allowToChangeInstallationDirectory: true,
    deleteAppDataOnUninstall: false,
  },
  linux: {
    target: ["AppImage"],
    artifactName: "${productName}-Linux-${version}.${ext}",
  },
};

module.exports = config;
