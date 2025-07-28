"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskDependencyAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TaskDependencyAvgAggregate = class TaskDependencyAvgAggregate {
};
exports.TaskDependencyAvgAggregate = TaskDependencyAvgAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TaskDependencyAvgAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TaskDependencyAvgAggregate.prototype, "taskId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TaskDependencyAvgAggregate.prototype, "dependsOnId", void 0);
exports.TaskDependencyAvgAggregate = TaskDependencyAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TaskDependencyAvgAggregate", {})
], TaskDependencyAvgAggregate);
