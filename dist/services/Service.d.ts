import 'reflect-metadata';
export declare abstract class Service {
    protected abstract values: any[];
    abstract build(): any;
    register(value: any): void;
}
export default Service;
