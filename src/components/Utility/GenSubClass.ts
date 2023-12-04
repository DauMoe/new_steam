export default class GenSubClass {
  RootClass: string;
  constructor(rootClass: string) {
    this.RootClass = rootClass;
    this.getRootClass = this.getRootClass.bind(this);
    this.setRootClass = this.setRootClass.bind(this);
    this.genSubClass = this.genSubClass.bind(this);
  }

  getRootClass(): string {
    return this.RootClass;
  }

  setRootClass(rootClass: string): void {
    this.RootClass = rootClass
  }

  genSubClass(subClass: string | string[]): string {
    if (Array.isArray(subClass)) return this.RootClass.concat(...subClass);
    return this.RootClass.concat(subClass);
  }
}