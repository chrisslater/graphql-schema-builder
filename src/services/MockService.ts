import { injectable } from 'inversify';
import 'reflect-metadata';
import { Service } from './Service';
import { MockStore, IMockService } from '../typings';

@injectable()
export class MockService extends Service implements IMockService {
  protected values: Object[] = [];
  public build(): MockStore {
    return Object.assign({}, ...this.values);
  }
}
