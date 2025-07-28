"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskUpdateToOneWithWhereWithoutDependentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskUpdateWithoutDependentsInput_1 = require("../inputs/TaskUpdateWithoutDependentsInput");
const TaskWhereInput_1 = require("../inputs/TaskWhereInput");
let TaskUpdateToOneWithWhereWithoutDependentsInput = class TaskUpdateToOneWithWhereWithoutDependentsInput {
};
exports.TaskUpdateToOneWithWhereWithoutDependentsInput = TaskUpdateToOneWithWhereWithoutDependentsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskWhereInput_1.TaskWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskWhereInput_1.TaskWhereInput)
], TaskUpdateToOneWithWhereWithoutDependentsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskUpdateWithoutDependentsInput_1.TaskUpdateWithoutDependentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskUpdateWithoutDependentsInput_1.TaskUpdateWithoutDependentsInput)
], TaskUpdateToOneWithWhereWithoutDependentsInput.prototype, "data", void 0);
exports.TaskUpdateToOneWithWhereWithoutDependentsInput = TaskUpdateToOneWithWhereWithoutDependentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskUpdateToOneWithWhereWithoutDependentsInput", {})
], TaskUpdateToOneWithWhereWithoutDependentsInput);
