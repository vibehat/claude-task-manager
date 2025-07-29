"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskDependencyCreateManyTaskInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TaskDependencyCreateManyTaskInput = class TaskDependencyCreateManyTaskInput {
};
exports.TaskDependencyCreateManyTaskInput = TaskDependencyCreateManyTaskInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TaskDependencyCreateManyTaskInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TaskDependencyCreateManyTaskInput.prototype, "dependsOnId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TaskDependencyCreateManyTaskInput.prototype, "createdAt", void 0);
exports.TaskDependencyCreateManyTaskInput = TaskDependencyCreateManyTaskInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskDependencyCreateManyTaskInput", {})
], TaskDependencyCreateManyTaskInput);
