"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskDependencyOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskOrderByWithRelationInput_1 = require("../inputs/TaskOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let TaskDependencyOrderByWithRelationInput = class TaskDependencyOrderByWithRelationInput {
};
exports.TaskDependencyOrderByWithRelationInput = TaskDependencyOrderByWithRelationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskDependencyOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskDependencyOrderByWithRelationInput.prototype, "taskId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskDependencyOrderByWithRelationInput.prototype, "dependsOnId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskDependencyOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskOrderByWithRelationInput_1.TaskOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskOrderByWithRelationInput_1.TaskOrderByWithRelationInput)
], TaskDependencyOrderByWithRelationInput.prototype, "task", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskOrderByWithRelationInput_1.TaskOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskOrderByWithRelationInput_1.TaskOrderByWithRelationInput)
], TaskDependencyOrderByWithRelationInput.prototype, "dependsOn", void 0);
exports.TaskDependencyOrderByWithRelationInput = TaskDependencyOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskDependencyOrderByWithRelationInput", {})
], TaskDependencyOrderByWithRelationInput);
