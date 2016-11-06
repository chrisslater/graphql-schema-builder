import { injectable } from 'inversify';
import 'reflect-metadata';

@injectable()
export abstract class Service {
  protected abstract values: any[] = [];
  public abstract build(): any;

  public register(value: any): void {
    this.values.push(value);
  }
}

export default Service;
