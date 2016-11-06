/// <reference types="typed-graphql" />
import { GraphQLSchema } from 'graphql';
import 'reflect-metadata';
import { ISchemaBuilder, ISchemaService, IResolverService, IMockService, ISchema, SchemaStrings, SchemaValues } from './typings';
export declare class SchemaBuilder implements ISchemaBuilder {
    protected schema: ISchemaService;
    protected resolvers: IResolverService;
    protected mocks: IMockService;
    register(obj: ISchema): void;
    create(mockSchema?: boolean): GraphQLSchema;
    protected registerProperty(name: SchemaStrings, value: SchemaValues): void;
}
