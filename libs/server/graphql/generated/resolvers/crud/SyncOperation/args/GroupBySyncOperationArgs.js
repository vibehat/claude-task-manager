"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupBySyncOperationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SyncOperationOrderByWithAggregationInput_1 = require("../../../inputs/SyncOperationOrderByWithAggregationInput");
const SyncOperationScalarWhereWithAggregatesInput_1 = require("../../../inputs/SyncOperationScalarWhereWithAggregatesInput");
const SyncOperationWhereInput_1 = require("../../../inputs/SyncOperationWhereInput");
const SyncOperationScalarFieldEnum_1 = require("../../../../enums/SyncOperationScalarFieldEnum");
let GroupBySyncOperationArgs = class GroupBySyncOperationArgs {
};
exports.GroupBySyncOperationArgs = GroupBySyncOperationArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncOperationWhereInput_1.SyncOperationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SyncOperationWhereInput_1.SyncOperationWhereInput)
], GroupBySyncOperationArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SyncOperationOrderByWithAggregationInput_1.SyncOperationOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupBySyncOperationArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SyncOperationScalarFieldEnum_1.SyncOperationScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupBySyncOperationArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncOperationScalarWhereWithAggregatesInput_1.SyncOperationScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SyncOperationScalarWhereWithAggregatesInput_1.SyncOperationScalarWhereWithAggregatesInput)
], GroupBySyncOperationArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupBySyncOperationArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupBySyncOperationArgs.prototype, "skip", void 0);
exports.GroupBySyncOperationArgs = GroupBySyncOperationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupBySyncOperationArgs);
