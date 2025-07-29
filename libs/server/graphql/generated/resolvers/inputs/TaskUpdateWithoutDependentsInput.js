"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskUpdateWithoutDependentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const IssueUpdateManyWithoutTaskNestedInput_1 = require("../inputs/IssueUpdateManyWithoutTaskNestedInput");
const NullableIntFieldUpdateOperationsInput_1 = require("../inputs/NullableIntFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const SubtaskUpdateManyWithoutParentTaskNestedInput_1 = require("../inputs/SubtaskUpdateManyWithoutParentTaskNestedInput");
const TaskDependencyUpdateManyWithoutTaskNestedInput_1 = require("../inputs/TaskDependencyUpdateManyWithoutTaskNestedInput");
let TaskUpdateWithoutDependentsInput = class TaskUpdateWithoutDependentsInput {
};
exports.TaskUpdateWithoutDependentsInput = TaskUpdateWithoutDependentsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], TaskUpdateWithoutDependentsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TaskUpdateWithoutDependentsInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TaskUpdateWithoutDependentsInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TaskUpdateWithoutDependentsInput.prototype, "details", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TaskUpdateWithoutDependentsInput.prototype, "testStrategy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TaskUpdateWithoutDependentsInput.prototype, "priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TaskUpdateWithoutDependentsInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput)
], TaskUpdateWithoutDependentsInput.prototype, "complexity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TaskUpdateWithoutDependentsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TaskUpdateWithoutDependentsInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskUpdateManyWithoutParentTaskNestedInput_1.SubtaskUpdateManyWithoutParentTaskNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubtaskUpdateManyWithoutParentTaskNestedInput_1.SubtaskUpdateManyWithoutParentTaskNestedInput)
], TaskUpdateWithoutDependentsInput.prototype, "subtasks", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyUpdateManyWithoutTaskNestedInput_1.TaskDependencyUpdateManyWithoutTaskNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskDependencyUpdateManyWithoutTaskNestedInput_1.TaskDependencyUpdateManyWithoutTaskNestedInput)
], TaskUpdateWithoutDependentsInput.prototype, "dependencies", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueUpdateManyWithoutTaskNestedInput_1.IssueUpdateManyWithoutTaskNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueUpdateManyWithoutTaskNestedInput_1.IssueUpdateManyWithoutTaskNestedInput)
], TaskUpdateWithoutDependentsInput.prototype, "issues", void 0);
exports.TaskUpdateWithoutDependentsInput = TaskUpdateWithoutDependentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskUpdateWithoutDependentsInput", {})
], TaskUpdateWithoutDependentsInput);
