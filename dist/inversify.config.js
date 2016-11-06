"use strict";
const inversify_1 = require('inversify');
const TYPES = require('./types');
const Services = require('./services');
const SchemaBuilder_1 = require('./SchemaBuilder');
exports.container = new inversify_1.Container();
exports.container.bind(TYPES.SchemaService).to(Services.SchemaService);
exports.container.bind(TYPES.ResolverService).to(Services.ResolverService);
exports.container.bind(TYPES.MockService).to(Services.MockService);
exports.container.bind(TYPES.SchemaBuilder).to(SchemaBuilder_1.SchemaBuilder);
//# sourceMappingURL=inversify.config.js.map