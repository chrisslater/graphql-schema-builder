import 'reflect-metadata';
import { Service } from './Service';
import { IResolverService, ResolverStore } from '../typings';
export declare class ResolverService extends Service implements IResolverService {
    protected values: Object[];
    build(): ResolverStore;
}
