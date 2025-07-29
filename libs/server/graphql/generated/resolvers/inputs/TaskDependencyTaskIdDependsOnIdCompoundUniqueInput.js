"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskDependencyTaskIdDependsOnIdCompoundUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TaskDependencyTaskIdDependsOnIdCompoundUniqueInput = class TaskDependencyTaskIdDependsOnIdCompoundUniqueInput {
};
exports.TaskDependencyTaskIdDependsOnIdCompoundUniqueInput = TaskDependencyTaskIdDependsOnIdCompoundUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TaskDependencyTaskIdDependsOnIdCompoundUniqueInput.prototype, "taskId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TaskDependencyTaskIdDependsOnIdCompoundUniqueInput.prototype, "dependsOnId", void 0);
exports.TaskDependencyTaskIdDependsOnIdCompoundUniqueInput = TaskDependencyTaskIdDependsOnIdCompoundUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskDependencyTaskIdDependsOnIdCompoundUniqueInput", {})
], TaskDependencyTaskIdDependsOnIdCompoundUniqueInput);
