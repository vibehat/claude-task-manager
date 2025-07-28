"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupBySyncConflictArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SyncConflictOrderByWithAggregationInput_1 = require("../../../inputs/SyncConflictOrderByWithAggregationInput");
const SyncConflictScalarWhereWithAggregatesInput_1 = require("../../../inputs/SyncConflictScalarWhereWithAggregatesInput");
const SyncConflictWhereInput_1 = require("../../../inputs/SyncConflictWhereInput");
const SyncConflictScalarFieldEnum_1 = require("../../../../enums/SyncConflictScalarFieldEnum");
let GroupBySyncConflictArgs = class GroupBySyncConflictArgs {
};
exports.GroupBySyncConflictArgs = GroupBySyncConflictArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncConflictWhereInput_1.SyncConflictWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SyncConflictWhereInput_1.SyncConflictWhereInput)
], GroupBySyncConflictArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SyncConflictOrderByWithAggregationInput_1.SyncConflictOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupBySyncConflictArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SyncConflictScalarFieldEnum_1.SyncConflictScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupBySyncConflictArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncConflictScalarWhereWithAggregatesInput_1.SyncConflictScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SyncConflictScalarWhereWithAggregatesInput_1.SyncConflictScalarWhereWithAggregatesInput)
], GroupBySyncConflictArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupBySyncConflictArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupBySyncConflictArgs.prototype, "skip", void 0);
exports.GroupBySyncConflictArgs = GroupBySyncConflictArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupBySyncConflictArgs);
