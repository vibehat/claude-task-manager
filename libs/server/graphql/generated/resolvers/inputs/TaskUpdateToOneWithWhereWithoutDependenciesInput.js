"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskUpdateToOneWithWhereWithoutDependenciesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskUpdateWithoutDependenciesInput_1 = require("../inputs/TaskUpdateWithoutDependenciesInput");
const TaskWhereInput_1 = require("../inputs/TaskWhereInput");
let TaskUpdateToOneWithWhereWithoutDependenciesInput = class TaskUpdateToOneWithWhereWithoutDependenciesInput {
};
exports.TaskUpdateToOneWithWhereWithoutDependenciesInput = TaskUpdateToOneWithWhereWithoutDependenciesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskWhereInput_1.TaskWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskWhereInput_1.TaskWhereInput)
], TaskUpdateToOneWithWhereWithoutDependenciesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskUpdateWithoutDependenciesInput_1.TaskUpdateWithoutDependenciesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskUpdateWithoutDependenciesInput_1.TaskUpdateWithoutDependenciesInput)
], TaskUpdateToOneWithWhereWithoutDependenciesInput.prototype, "data", void 0);
exports.TaskUpdateToOneWithWhereWithoutDependenciesInput = TaskUpdateToOneWithWhereWithoutDependenciesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskUpdateToOneWithWhereWithoutDependenciesInput", {})
], TaskUpdateToOneWithWhereWithoutDependenciesInput);
