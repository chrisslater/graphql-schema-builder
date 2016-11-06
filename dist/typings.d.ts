/// <reference types="typed-graphql" />
import { GraphQLSchema } from 'graphql';
export declare type ResolveFn = (root?: string, args?: Object) => any;
export declare type Resolver = {
    [key: string]: ResolveFn;
};
export declare type ResolverUnion = ResolveFn | Resolver;
export interface ResolverStore {
    [key: string]: ResolverUnion;
}
export declare type MockFn = () => any;
export interface MockStore {
    [key: string]: MockFn;
}
export interface ISchema {
    schema: string;
    resolver: ResolverStore;
    mock?: MockStore;
    [key: string]: any;
}
export interface SchemaModule {
    schema: string;
    resolver: ResolverStore;
    mock?: MockStore;
    [key: string]: any;
}
export declare type SchemaStrings = 'schema' | 'resolver' | 'mock';
export declare type SchemaValues = string | ResolverStore | MockStore;
export interface IService {
    register(value: any): void;
}
export interface ISchemaService extends IService {
    build(): GraphQLSchema;
}
export interface IResolverService extends IService {
    build(): ResolverStore;
}
export interface IMockService extends IService {
    build(): MockStore;
}
export interface ISchemaBuilder {
    register(obj: ISchema): void;
    create(mockSchema?: boolean): GraphQLSchema;
}
