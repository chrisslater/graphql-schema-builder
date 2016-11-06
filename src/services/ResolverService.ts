import { injectable } from 'inversify';
import 'reflect-metadata';
import { Service } from './Service';
import { IResolverService, ResolverStore } from '../typings';

@injectable()
export class ResolverService extends Service implements IResolverService {
  protected values: Object[] = [];
  public build(): ResolverStore {
    return Object.assign({}, ...this.values);
  }
}
