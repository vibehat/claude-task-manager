"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCreateOrConnectWithoutSubtasksInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCreateWithoutSubtasksInput_1 = require("../inputs/TaskCreateWithoutSubtasksInput");
const TaskWhereUniqueInput_1 = require("../inputs/TaskWhereUniqueInput");
let TaskCreateOrConnectWithoutSubtasksInput = class TaskCreateOrConnectWithoutSubtasksInput {
};
exports.TaskCreateOrConnectWithoutSubtasksInput = TaskCreateOrConnectWithoutSubtasksInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskWhereUniqueInput_1.TaskWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskWhereUniqueInput_1.TaskWhereUniqueInput)
], TaskCreateOrConnectWithoutSubtasksInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateWithoutSubtasksInput_1.TaskCreateWithoutSubtasksInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskCreateWithoutSubtasksInput_1.TaskCreateWithoutSubtasksInput)
], TaskCreateOrConnectWithoutSubtasksInput.prototype, "create", void 0);
exports.TaskCreateOrConnectWithoutSubtasksInput = TaskCreateOrConnectWithoutSubtasksInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskCreateOrConnectWithoutSubtasksInput", {})
], TaskCreateOrConnectWithoutSubtasksInput);
