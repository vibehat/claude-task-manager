"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskUpdateToOneWithWhereWithoutSubtasksInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskUpdateWithoutSubtasksInput_1 = require("../inputs/TaskUpdateWithoutSubtasksInput");
const TaskWhereInput_1 = require("../inputs/TaskWhereInput");
let TaskUpdateToOneWithWhereWithoutSubtasksInput = class TaskUpdateToOneWithWhereWithoutSubtasksInput {
};
exports.TaskUpdateToOneWithWhereWithoutSubtasksInput = TaskUpdateToOneWithWhereWithoutSubtasksInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskWhereInput_1.TaskWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskWhereInput_1.TaskWhereInput)
], TaskUpdateToOneWithWhereWithoutSubtasksInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskUpdateWithoutSubtasksInput_1.TaskUpdateWithoutSubtasksInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskUpdateWithoutSubtasksInput_1.TaskUpdateWithoutSubtasksInput)
], TaskUpdateToOneWithWhereWithoutSubtasksInput.prototype, "data", void 0);
exports.TaskUpdateToOneWithWhereWithoutSubtasksInput = TaskUpdateToOneWithWhereWithoutSubtasksInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskUpdateToOneWithWhereWithoutSubtasksInput", {})
], TaskUpdateToOneWithWhereWithoutSubtasksInput);
