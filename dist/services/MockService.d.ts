import 'reflect-metadata';
import { Service } from './Service';
import { MockStore, IMockService } from '../typings';
export declare class MockService extends Service implements IMockService {
    protected values: Object[];
    build(): MockStore;
}
