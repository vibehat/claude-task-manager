"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskDependencySumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TaskDependencySumAggregate = class TaskDependencySumAggregate {
};
exports.TaskDependencySumAggregate = TaskDependencySumAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TaskDependencySumAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TaskDependencySumAggregate.prototype, "taskId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TaskDependencySumAggregate.prototype, "dependsOnId", void 0);
exports.TaskDependencySumAggregate = TaskDependencySumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TaskDependencySumAggregate", {})
], TaskDependencySumAggregate);
