/// <reference types="typed-graphql" />
import { GraphQLSchema } from 'graphql';
import { Service } from './Service';
import { ISchemaService } from '../typings';
import 'reflect-metadata';
export declare class SchemaService extends Service implements ISchemaService {
    protected values: string[];
    build(): GraphQLSchema;
}
