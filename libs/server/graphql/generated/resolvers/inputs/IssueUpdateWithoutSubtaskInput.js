"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueUpdateWithoutSubtaskInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CycleUpdateOneWithoutIssuesNestedInput_1 = require("../inputs/CycleUpdateOneWithoutIssuesNestedInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const IssueLabelUpdateManyWithoutIssueNestedInput_1 = require("../inputs/IssueLabelUpdateManyWithoutIssueNestedInput");
const IssuePriorityUpdateOneWithoutIssuesNestedInput_1 = require("../inputs/IssuePriorityUpdateOneWithoutIssuesNestedInput");
const IssueStatusUpdateOneWithoutIssuesNestedInput_1 = require("../inputs/IssueStatusUpdateOneWithoutIssuesNestedInput");
const IssueUpdateManyWithoutParentIssueNestedInput_1 = require("../inputs/IssueUpdateManyWithoutParentIssueNestedInput");
const IssueUpdateOneWithoutSubIssuesNestedInput_1 = require("../inputs/IssueUpdateOneWithoutSubIssuesNestedInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const ProjectUpdateOneWithoutIssuesNestedInput_1 = require("../inputs/ProjectUpdateOneWithoutIssuesNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TaskUpdateOneWithoutIssuesNestedInput_1 = require("../inputs/TaskUpdateOneWithoutIssuesNestedInput");
const UserUpdateOneWithoutAssignedIssuesNestedInput_1 = require("../inputs/UserUpdateOneWithoutAssignedIssuesNestedInput");
let IssueUpdateWithoutSubtaskInput = class IssueUpdateWithoutSubtaskInput {
};
exports.IssueUpdateWithoutSubtaskInput = IssueUpdateWithoutSubtaskInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], IssueUpdateWithoutSubtaskInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], IssueUpdateWithoutSubtaskInput.prototype, "identifier", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], IssueUpdateWithoutSubtaskInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], IssueUpdateWithoutSubtaskInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], IssueUpdateWithoutSubtaskInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], IssueUpdateWithoutSubtaskInput.prototype, "priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], IssueUpdateWithoutSubtaskInput.prototype, "rank", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], IssueUpdateWithoutSubtaskInput.prototype, "dueDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], IssueUpdateWithoutSubtaskInput.prototype, "issueType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], IssueUpdateWithoutSubtaskInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], IssueUpdateWithoutSubtaskInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneWithoutAssignedIssuesNestedInput_1.UserUpdateOneWithoutAssignedIssuesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneWithoutAssignedIssuesNestedInput_1.UserUpdateOneWithoutAssignedIssuesNestedInput)
], IssueUpdateWithoutSubtaskInput.prototype, "assignee", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectUpdateOneWithoutIssuesNestedInput_1.ProjectUpdateOneWithoutIssuesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectUpdateOneWithoutIssuesNestedInput_1.ProjectUpdateOneWithoutIssuesNestedInput)
], IssueUpdateWithoutSubtaskInput.prototype, "project", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleUpdateOneWithoutIssuesNestedInput_1.CycleUpdateOneWithoutIssuesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CycleUpdateOneWithoutIssuesNestedInput_1.CycleUpdateOneWithoutIssuesNestedInput)
], IssueUpdateWithoutSubtaskInput.prototype, "cycle", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskUpdateOneWithoutIssuesNestedInput_1.TaskUpdateOneWithoutIssuesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskUpdateOneWithoutIssuesNestedInput_1.TaskUpdateOneWithoutIssuesNestedInput)
], IssueUpdateWithoutSubtaskInput.prototype, "task", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueStatusUpdateOneWithoutIssuesNestedInput_1.IssueStatusUpdateOneWithoutIssuesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueStatusUpdateOneWithoutIssuesNestedInput_1.IssueStatusUpdateOneWithoutIssuesNestedInput)
], IssueUpdateWithoutSubtaskInput.prototype, "issueStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssuePriorityUpdateOneWithoutIssuesNestedInput_1.IssuePriorityUpdateOneWithoutIssuesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssuePriorityUpdateOneWithoutIssuesNestedInput_1.IssuePriorityUpdateOneWithoutIssuesNestedInput)
], IssueUpdateWithoutSubtaskInput.prototype, "issuePriority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueLabelUpdateManyWithoutIssueNestedInput_1.IssueLabelUpdateManyWithoutIssueNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueLabelUpdateManyWithoutIssueNestedInput_1.IssueLabelUpdateManyWithoutIssueNestedInput)
], IssueUpdateWithoutSubtaskInput.prototype, "labels", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueUpdateOneWithoutSubIssuesNestedInput_1.IssueUpdateOneWithoutSubIssuesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueUpdateOneWithoutSubIssuesNestedInput_1.IssueUpdateOneWithoutSubIssuesNestedInput)
], IssueUpdateWithoutSubtaskInput.prototype, "parentIssue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueUpdateManyWithoutParentIssueNestedInput_1.IssueUpdateManyWithoutParentIssueNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueUpdateManyWithoutParentIssueNestedInput_1.IssueUpdateManyWithoutParentIssueNestedInput)
], IssueUpdateWithoutSubtaskInput.prototype, "subIssues", void 0);
exports.IssueUpdateWithoutSubtaskInput = IssueUpdateWithoutSubtaskInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueUpdateWithoutSubtaskInput", {})
], IssueUpdateWithoutSubtaskInput);
