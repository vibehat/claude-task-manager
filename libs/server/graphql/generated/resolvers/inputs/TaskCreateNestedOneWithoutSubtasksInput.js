"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCreateNestedOneWithoutSubtasksInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCreateOrConnectWithoutSubtasksInput_1 = require("../inputs/TaskCreateOrConnectWithoutSubtasksInput");
const TaskCreateWithoutSubtasksInput_1 = require("../inputs/TaskCreateWithoutSubtasksInput");
const TaskWhereUniqueInput_1 = require("../inputs/TaskWhereUniqueInput");
let TaskCreateNestedOneWithoutSubtasksInput = class TaskCreateNestedOneWithoutSubtasksInput {
};
exports.TaskCreateNestedOneWithoutSubtasksInput = TaskCreateNestedOneWithoutSubtasksInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateWithoutSubtasksInput_1.TaskCreateWithoutSubtasksInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskCreateWithoutSubtasksInput_1.TaskCreateWithoutSubtasksInput)
], TaskCreateNestedOneWithoutSubtasksInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateOrConnectWithoutSubtasksInput_1.TaskCreateOrConnectWithoutSubtasksInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskCreateOrConnectWithoutSubtasksInput_1.TaskCreateOrConnectWithoutSubtasksInput)
], TaskCreateNestedOneWithoutSubtasksInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskWhereUniqueInput_1.TaskWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskWhereUniqueInput_1.TaskWhereUniqueInput)
], TaskCreateNestedOneWithoutSubtasksInput.prototype, "connect", void 0);
exports.TaskCreateNestedOneWithoutSubtasksInput = TaskCreateNestedOneWithoutSubtasksInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskCreateNestedOneWithoutSubtasksInput", {})
], TaskCreateNestedOneWithoutSubtasksInput);
