"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskUpdateWithoutIssuesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const NullableIntFieldUpdateOperationsInput_1 = require("../inputs/NullableIntFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const SubtaskUpdateManyWithoutParentTaskNestedInput_1 = require("../inputs/SubtaskUpdateManyWithoutParentTaskNestedInput");
const TaskDependencyUpdateManyWithoutDependsOnNestedInput_1 = require("../inputs/TaskDependencyUpdateManyWithoutDependsOnNestedInput");
const TaskDependencyUpdateManyWithoutTaskNestedInput_1 = require("../inputs/TaskDependencyUpdateManyWithoutTaskNestedInput");
let TaskUpdateWithoutIssuesInput = class TaskUpdateWithoutIssuesInput {
};
exports.TaskUpdateWithoutIssuesInput = TaskUpdateWithoutIssuesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], TaskUpdateWithoutIssuesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TaskUpdateWithoutIssuesInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TaskUpdateWithoutIssuesInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TaskUpdateWithoutIssuesInput.prototype, "details", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TaskUpdateWithoutIssuesInput.prototype, "testStrategy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TaskUpdateWithoutIssuesInput.prototype, "priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TaskUpdateWithoutIssuesInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput)
], TaskUpdateWithoutIssuesInput.prototype, "complexity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TaskUpdateWithoutIssuesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TaskUpdateWithoutIssuesInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskUpdateManyWithoutParentTaskNestedInput_1.SubtaskUpdateManyWithoutParentTaskNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubtaskUpdateManyWithoutParentTaskNestedInput_1.SubtaskUpdateManyWithoutParentTaskNestedInput)
], TaskUpdateWithoutIssuesInput.prototype, "subtasks", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyUpdateManyWithoutTaskNestedInput_1.TaskDependencyUpdateManyWithoutTaskNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskDependencyUpdateManyWithoutTaskNestedInput_1.TaskDependencyUpdateManyWithoutTaskNestedInput)
], TaskUpdateWithoutIssuesInput.prototype, "dependencies", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyUpdateManyWithoutDependsOnNestedInput_1.TaskDependencyUpdateManyWithoutDependsOnNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskDependencyUpdateManyWithoutDependsOnNestedInput_1.TaskDependencyUpdateManyWithoutDependsOnNestedInput)
], TaskUpdateWithoutIssuesInput.prototype, "dependents", void 0);
exports.TaskUpdateWithoutIssuesInput = TaskUpdateWithoutIssuesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskUpdateWithoutIssuesInput", {})
], TaskUpdateWithoutIssuesInput);
