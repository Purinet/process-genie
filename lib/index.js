function getNativeProcessClass() {
    const currentPlatform = process.platform;
    const nativeProcessModuleName = `./process-${currentPlatform}`;

    try {
        require.resolve(nativeProcessModuleName);
    } catch (_) {
        return null;
    }

    return require(nativeProcessModuleName);
}

function assertNativeProcessClassSet() {
    if (module.exports.Process === null) {
        throw new Error('Unsupported platform. You can set the `Process` property manually or use a specific process class directly.');
    }
}

module.exports.Process = getNativeProcessClass();

module.exports.attach = function(pid) {
    assertNativeProcessClassSet();

    const proc = new module.exports.Process(pid);
    proc.attach();
    return proc;
};

// TODO:
// module.exports.iterateOpenProcesses = function*() {
//    ...
// };
