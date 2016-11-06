"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const tools = require('graphql-tools');
const inversify_1 = require('inversify');
require('reflect-metadata');
const TYPES = require('./types');
let SchemaBuilder = class SchemaBuilder {
    register(obj) {
        const that = this;
        Object.keys(obj).forEach((key) => {
            that.registerProperty(key, obj[key]);
        });
    }
    create(mockSchema = false) {
        const schema = this.schema.build();
        tools.addResolveFunctionsToSchema(schema, this.resolvers.build());
        if (mockSchema) {
            tools.addMockFunctionsToSchema({ schema, mocks: this.mocks.build() });
        }
        return schema;
    }
    registerProperty(name, value) {
        switch (name) {
            case 'schema':
                return this.schema.register(value);
            case 'resolver':
                return this.resolvers.register(value);
            case 'mock':
                return this.mocks.register(value);
            default:
        }
    }
};
__decorate([
    inversify_1.inject(TYPES.SchemaService), 
    __metadata('design:type', Object)
], SchemaBuilder.prototype, "schema", void 0);
__decorate([
    inversify_1.inject(TYPES.ResolverService), 
    __metadata('design:type', Object)
], SchemaBuilder.prototype, "resolvers", void 0);
__decorate([
    inversify_1.inject(TYPES.MockService), 
    __metadata('design:type', Object)
], SchemaBuilder.prototype, "mocks", void 0);
SchemaBuilder = __decorate([
    inversify_1.injectable(), 
    __metadata('design:paramtypes', [])
], SchemaBuilder);
exports.SchemaBuilder = SchemaBuilder;
//# sourceMappingURL=SchemaBuilder.js.map