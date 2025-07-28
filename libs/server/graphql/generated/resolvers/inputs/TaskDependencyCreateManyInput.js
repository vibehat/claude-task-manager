"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskDependencyCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TaskDependencyCreateManyInput = class TaskDependencyCreateManyInput {
};
exports.TaskDependencyCreateManyInput = TaskDependencyCreateManyInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TaskDependencyCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TaskDependencyCreateManyInput.prototype, "taskId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TaskDependencyCreateManyInput.prototype, "dependsOnId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TaskDependencyCreateManyInput.prototype, "createdAt", void 0);
exports.TaskDependencyCreateManyInput = TaskDependencyCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskDependencyCreateManyInput", {})
], TaskDependencyCreateManyInput);
