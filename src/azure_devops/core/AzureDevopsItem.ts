export class AzureDevopsItem {
  name: string;
  id: string;
  description: string;
  constructor(options: any) {
    this.id = options.id || options.name || '';
    this.name = options.name || options.displayName || options.id || '';
    this.description = options.description || '';
  }
  asSelectable() {
    return {
      value: this.id,
      label: this.name,
    };
  }
  asVariable() {
    return {
      value: this.id,
      text: this.name,
    };
  }
}
