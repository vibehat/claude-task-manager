"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskDependencyUpdateManyWithWhereWithoutTaskInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskDependencyScalarWhereInput_1 = require("../inputs/TaskDependencyScalarWhereInput");
const TaskDependencyUpdateManyMutationInput_1 = require("../inputs/TaskDependencyUpdateManyMutationInput");
let TaskDependencyUpdateManyWithWhereWithoutTaskInput = class TaskDependencyUpdateManyWithWhereWithoutTaskInput {
};
exports.TaskDependencyUpdateManyWithWhereWithoutTaskInput = TaskDependencyUpdateManyWithWhereWithoutTaskInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyScalarWhereInput_1.TaskDependencyScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskDependencyScalarWhereInput_1.TaskDependencyScalarWhereInput)
], TaskDependencyUpdateManyWithWhereWithoutTaskInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyUpdateManyMutationInput_1.TaskDependencyUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskDependencyUpdateManyMutationInput_1.TaskDependencyUpdateManyMutationInput)
], TaskDependencyUpdateManyWithWhereWithoutTaskInput.prototype, "data", void 0);
exports.TaskDependencyUpdateManyWithWhereWithoutTaskInput = TaskDependencyUpdateManyWithWhereWithoutTaskInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskDependencyUpdateManyWithWhereWithoutTaskInput", {})
], TaskDependencyUpdateManyWithWhereWithoutTaskInput);
