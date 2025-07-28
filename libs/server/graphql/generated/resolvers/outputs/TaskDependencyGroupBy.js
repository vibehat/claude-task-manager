"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskDependencyGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskDependencyAvgAggregate_1 = require("../outputs/TaskDependencyAvgAggregate");
const TaskDependencyCountAggregate_1 = require("../outputs/TaskDependencyCountAggregate");
const TaskDependencyMaxAggregate_1 = require("../outputs/TaskDependencyMaxAggregate");
const TaskDependencyMinAggregate_1 = require("../outputs/TaskDependencyMinAggregate");
const TaskDependencySumAggregate_1 = require("../outputs/TaskDependencySumAggregate");
let TaskDependencyGroupBy = class TaskDependencyGroupBy {
};
exports.TaskDependencyGroupBy = TaskDependencyGroupBy;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TaskDependencyGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TaskDependencyGroupBy.prototype, "taskId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TaskDependencyGroupBy.prototype, "dependsOnId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], TaskDependencyGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyCountAggregate_1.TaskDependencyCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskDependencyCountAggregate_1.TaskDependencyCountAggregate)
], TaskDependencyGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyAvgAggregate_1.TaskDependencyAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskDependencyAvgAggregate_1.TaskDependencyAvgAggregate)
], TaskDependencyGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencySumAggregate_1.TaskDependencySumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskDependencySumAggregate_1.TaskDependencySumAggregate)
], TaskDependencyGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyMinAggregate_1.TaskDependencyMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskDependencyMinAggregate_1.TaskDependencyMinAggregate)
], TaskDependencyGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyMaxAggregate_1.TaskDependencyMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskDependencyMaxAggregate_1.TaskDependencyMaxAggregate)
], TaskDependencyGroupBy.prototype, "_max", void 0);
exports.TaskDependencyGroupBy = TaskDependencyGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TaskDependencyGroupBy", {})
], TaskDependencyGroupBy);
