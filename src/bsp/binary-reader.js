export class BinaryReader {

  constructor(bsp: string) {
    this.position = 0;
    this.buffer = new ArrayBuffer(bsp.length);
    this.view = new DataView(this.buffer);
    for (let i = 0; i < bsp.length; ++i) {
      this.view.setUint8(i, bsp.charCodeAt(i));
    }
  }

  readUint32(): number {
    return this.view.getUint32(this.position++);
  }
}