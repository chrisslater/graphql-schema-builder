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
const graphql_tools_1 = require('graphql-tools');
const Service_1 = require('./Service');
const inversify_1 = require('inversify');
require('reflect-metadata');
let SchemaService = class SchemaService extends Service_1.Service {
    constructor() {
        super(...arguments);
        this.values = [];
    }
    build() {
        const processedValues = this.values;
        return graphql_tools_1.buildSchemaFromTypeDefinitions(processedValues);
    }
};
SchemaService = __decorate([
    inversify_1.injectable(), 
    __metadata('design:paramtypes', [])
], SchemaService);
exports.SchemaService = SchemaService;
