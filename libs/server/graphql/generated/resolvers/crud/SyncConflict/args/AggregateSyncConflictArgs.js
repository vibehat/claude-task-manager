"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSyncConflictArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SyncConflictOrderByWithRelationInput_1 = require("../../../inputs/SyncConflictOrderByWithRelationInput");
const SyncConflictWhereInput_1 = require("../../../inputs/SyncConflictWhereInput");
const SyncConflictWhereUniqueInput_1 = require("../../../inputs/SyncConflictWhereUniqueInput");
let AggregateSyncConflictArgs = class AggregateSyncConflictArgs {
};
exports.AggregateSyncConflictArgs = AggregateSyncConflictArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncConflictWhereInput_1.SyncConflictWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SyncConflictWhereInput_1.SyncConflictWhereInput)
], AggregateSyncConflictArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SyncConflictOrderByWithRelationInput_1.SyncConflictOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateSyncConflictArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncConflictWhereUniqueInput_1.SyncConflictWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SyncConflictWhereUniqueInput_1.SyncConflictWhereUniqueInput)
], AggregateSyncConflictArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateSyncConflictArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateSyncConflictArgs.prototype, "skip", void 0);
exports.AggregateSyncConflictArgs = AggregateSyncConflictArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateSyncConflictArgs);
