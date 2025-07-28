"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskDependencyCreateManyDependsOnInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TaskDependencyCreateManyDependsOnInput = class TaskDependencyCreateManyDependsOnInput {
};
exports.TaskDependencyCreateManyDependsOnInput = TaskDependencyCreateManyDependsOnInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TaskDependencyCreateManyDependsOnInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TaskDependencyCreateManyDependsOnInput.prototype, "taskId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TaskDependencyCreateManyDependsOnInput.prototype, "createdAt", void 0);
exports.TaskDependencyCreateManyDependsOnInput = TaskDependencyCreateManyDependsOnInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskDependencyCreateManyDependsOnInput", {})
], TaskDependencyCreateManyDependsOnInput);
