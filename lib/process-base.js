module.exports = class ProcessBase {
    constructor(pid) {
        if (this.constructor === ProcessBase) {
            throw new Error('Cannot instantiate abstract class');
        }

        this.pid = pid;
    }

    attach() {
        throw new Error('Abstract method cannot be called');
    }

    detach() {
        throw new Error('Abstract method cannot be called');
    }

    /* generator */ iterateMemoryRegions() {
        throw new Error('Abstract method cannot be called');
    }

    readMemory(address, size) {
        throw new Error('Abstract method cannot be called');
    }

    writeMemory(address, buffer) {
        throw new Error('Abstract method cannot be called');
    }
};
