# process-genie
Cross-platform node process memory manipulation library 

## Basic Usage

```js
const genie = require('process-genie');

const proc = genie.attach(1337);
```

## Read Memory

```js
const someBytesFromTheProcess = proc.readMemory(0xDEADBEEF, 20);
console.log(new Uint8Array(someBytesFromTheProcess));
```

## Write Memory

```js
proc.writeMemory(0xDEADCODE, new Uint8Array([0xEB, 0xFE]));
```

## List Mapped Memory Regions

```js
for (const region of proc.iterateMemoryRegions()) {
    console.log(region.address, region.size, region.protection);
}
```
