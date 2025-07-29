"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskDependencyMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TaskDependencyMinAggregate = class TaskDependencyMinAggregate {
};
exports.TaskDependencyMinAggregate = TaskDependencyMinAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TaskDependencyMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TaskDependencyMinAggregate.prototype, "taskId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TaskDependencyMinAggregate.prototype, "dependsOnId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TaskDependencyMinAggregate.prototype, "createdAt", void 0);
exports.TaskDependencyMinAggregate = TaskDependencyMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TaskDependencyMinAggregate", {})
], TaskDependencyMinAggregate);
