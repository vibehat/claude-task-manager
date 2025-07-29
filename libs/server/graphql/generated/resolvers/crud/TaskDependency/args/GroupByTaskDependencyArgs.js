"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByTaskDependencyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskDependencyOrderByWithAggregationInput_1 = require("../../../inputs/TaskDependencyOrderByWithAggregationInput");
const TaskDependencyScalarWhereWithAggregatesInput_1 = require("../../../inputs/TaskDependencyScalarWhereWithAggregatesInput");
const TaskDependencyWhereInput_1 = require("../../../inputs/TaskDependencyWhereInput");
const TaskDependencyScalarFieldEnum_1 = require("../../../../enums/TaskDependencyScalarFieldEnum");
let GroupByTaskDependencyArgs = class GroupByTaskDependencyArgs {
};
exports.GroupByTaskDependencyArgs = GroupByTaskDependencyArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyWhereInput_1.TaskDependencyWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskDependencyWhereInput_1.TaskDependencyWhereInput)
], GroupByTaskDependencyArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskDependencyOrderByWithAggregationInput_1.TaskDependencyOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByTaskDependencyArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskDependencyScalarFieldEnum_1.TaskDependencyScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByTaskDependencyArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyScalarWhereWithAggregatesInput_1.TaskDependencyScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskDependencyScalarWhereWithAggregatesInput_1.TaskDependencyScalarWhereWithAggregatesInput)
], GroupByTaskDependencyArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByTaskDependencyArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByTaskDependencyArgs.prototype, "skip", void 0);
exports.GroupByTaskDependencyArgs = GroupByTaskDependencyArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByTaskDependencyArgs);
