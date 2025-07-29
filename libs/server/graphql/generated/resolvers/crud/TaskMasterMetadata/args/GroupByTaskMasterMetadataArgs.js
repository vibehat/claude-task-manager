"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByTaskMasterMetadataArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskMasterMetadataOrderByWithAggregationInput_1 = require("../../../inputs/TaskMasterMetadataOrderByWithAggregationInput");
const TaskMasterMetadataScalarWhereWithAggregatesInput_1 = require("../../../inputs/TaskMasterMetadataScalarWhereWithAggregatesInput");
const TaskMasterMetadataWhereInput_1 = require("../../../inputs/TaskMasterMetadataWhereInput");
const TaskMasterMetadataScalarFieldEnum_1 = require("../../../../enums/TaskMasterMetadataScalarFieldEnum");
let GroupByTaskMasterMetadataArgs = class GroupByTaskMasterMetadataArgs {
};
exports.GroupByTaskMasterMetadataArgs = GroupByTaskMasterMetadataArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskMasterMetadataWhereInput_1.TaskMasterMetadataWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskMasterMetadataWhereInput_1.TaskMasterMetadataWhereInput)
], GroupByTaskMasterMetadataArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskMasterMetadataOrderByWithAggregationInput_1.TaskMasterMetadataOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByTaskMasterMetadataArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskMasterMetadataScalarFieldEnum_1.TaskMasterMetadataScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByTaskMasterMetadataArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskMasterMetadataScalarWhereWithAggregatesInput_1.TaskMasterMetadataScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskMasterMetadataScalarWhereWithAggregatesInput_1.TaskMasterMetadataScalarWhereWithAggregatesInput)
], GroupByTaskMasterMetadataArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByTaskMasterMetadataArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByTaskMasterMetadataArgs.prototype, "skip", void 0);
exports.GroupByTaskMasterMetadataArgs = GroupByTaskMasterMetadataArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByTaskMasterMetadataArgs);
