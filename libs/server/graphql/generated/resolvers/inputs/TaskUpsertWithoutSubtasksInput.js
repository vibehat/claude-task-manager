"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskUpsertWithoutSubtasksInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCreateWithoutSubtasksInput_1 = require("../inputs/TaskCreateWithoutSubtasksInput");
const TaskUpdateWithoutSubtasksInput_1 = require("../inputs/TaskUpdateWithoutSubtasksInput");
const TaskWhereInput_1 = require("../inputs/TaskWhereInput");
let TaskUpsertWithoutSubtasksInput = class TaskUpsertWithoutSubtasksInput {
};
exports.TaskUpsertWithoutSubtasksInput = TaskUpsertWithoutSubtasksInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskUpdateWithoutSubtasksInput_1.TaskUpdateWithoutSubtasksInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskUpdateWithoutSubtasksInput_1.TaskUpdateWithoutSubtasksInput)
], TaskUpsertWithoutSubtasksInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateWithoutSubtasksInput_1.TaskCreateWithoutSubtasksInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskCreateWithoutSubtasksInput_1.TaskCreateWithoutSubtasksInput)
], TaskUpsertWithoutSubtasksInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskWhereInput_1.TaskWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskWhereInput_1.TaskWhereInput)
], TaskUpsertWithoutSubtasksInput.prototype, "where", void 0);
exports.TaskUpsertWithoutSubtasksInput = TaskUpsertWithoutSubtasksInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskUpsertWithoutSubtasksInput", {})
], TaskUpsertWithoutSubtasksInput);
