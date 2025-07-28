"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByTaskArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskOrderByWithAggregationInput_1 = require("../../../inputs/TaskOrderByWithAggregationInput");
const TaskScalarWhereWithAggregatesInput_1 = require("../../../inputs/TaskScalarWhereWithAggregatesInput");
const TaskWhereInput_1 = require("../../../inputs/TaskWhereInput");
const TaskScalarFieldEnum_1 = require("../../../../enums/TaskScalarFieldEnum");
let GroupByTaskArgs = class GroupByTaskArgs {
};
exports.GroupByTaskArgs = GroupByTaskArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskWhereInput_1.TaskWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskWhereInput_1.TaskWhereInput)
], GroupByTaskArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskOrderByWithAggregationInput_1.TaskOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByTaskArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskScalarFieldEnum_1.TaskScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByTaskArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskScalarWhereWithAggregatesInput_1.TaskScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskScalarWhereWithAggregatesInput_1.TaskScalarWhereWithAggregatesInput)
], GroupByTaskArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByTaskArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByTaskArgs.prototype, "skip", void 0);
exports.GroupByTaskArgs = GroupByTaskArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByTaskArgs);
