"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueUpdateWithoutAssigneeInput = void 0;
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
const SubtaskUpdateOneWithoutIssuesNestedInput_1 = require("../inputs/SubtaskUpdateOneWithoutIssuesNestedInput");
const TaskUpdateOneWithoutIssuesNestedInput_1 = require("../inputs/TaskUpdateOneWithoutIssuesNestedInput");
let IssueUpdateWithoutAssigneeInput = class IssueUpdateWithoutAssigneeInput {
};
exports.IssueUpdateWithoutAssigneeInput = IssueUpdateWithoutAssigneeInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], IssueUpdateWithoutAssigneeInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], IssueUpdateWithoutAssigneeInput.prototype, "identifier", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], IssueUpdateWithoutAssigneeInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], IssueUpdateWithoutAssigneeInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], IssueUpdateWithoutAssigneeInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], IssueUpdateWithoutAssigneeInput.prototype, "priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], IssueUpdateWithoutAssigneeInput.prototype, "rank", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], IssueUpdateWithoutAssigneeInput.prototype, "dueDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], IssueUpdateWithoutAssigneeInput.prototype, "issueType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], IssueUpdateWithoutAssigneeInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], IssueUpdateWithoutAssigneeInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectUpdateOneWithoutIssuesNestedInput_1.ProjectUpdateOneWithoutIssuesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectUpdateOneWithoutIssuesNestedInput_1.ProjectUpdateOneWithoutIssuesNestedInput)
], IssueUpdateWithoutAssigneeInput.prototype, "project", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleUpdateOneWithoutIssuesNestedInput_1.CycleUpdateOneWithoutIssuesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CycleUpdateOneWithoutIssuesNestedInput_1.CycleUpdateOneWithoutIssuesNestedInput)
], IssueUpdateWithoutAssigneeInput.prototype, "cycle", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskUpdateOneWithoutIssuesNestedInput_1.TaskUpdateOneWithoutIssuesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskUpdateOneWithoutIssuesNestedInput_1.TaskUpdateOneWithoutIssuesNestedInput)
], IssueUpdateWithoutAssigneeInput.prototype, "task", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskUpdateOneWithoutIssuesNestedInput_1.SubtaskUpdateOneWithoutIssuesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubtaskUpdateOneWithoutIssuesNestedInput_1.SubtaskUpdateOneWithoutIssuesNestedInput)
], IssueUpdateWithoutAssigneeInput.prototype, "subtask", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueStatusUpdateOneWithoutIssuesNestedInput_1.IssueStatusUpdateOneWithoutIssuesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueStatusUpdateOneWithoutIssuesNestedInput_1.IssueStatusUpdateOneWithoutIssuesNestedInput)
], IssueUpdateWithoutAssigneeInput.prototype, "issueStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssuePriorityUpdateOneWithoutIssuesNestedInput_1.IssuePriorityUpdateOneWithoutIssuesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssuePriorityUpdateOneWithoutIssuesNestedInput_1.IssuePriorityUpdateOneWithoutIssuesNestedInput)
], IssueUpdateWithoutAssigneeInput.prototype, "issuePriority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueLabelUpdateManyWithoutIssueNestedInput_1.IssueLabelUpdateManyWithoutIssueNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueLabelUpdateManyWithoutIssueNestedInput_1.IssueLabelUpdateManyWithoutIssueNestedInput)
], IssueUpdateWithoutAssigneeInput.prototype, "labels", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueUpdateOneWithoutSubIssuesNestedInput_1.IssueUpdateOneWithoutSubIssuesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueUpdateOneWithoutSubIssuesNestedInput_1.IssueUpdateOneWithoutSubIssuesNestedInput)
], IssueUpdateWithoutAssigneeInput.prototype, "parentIssue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueUpdateManyWithoutParentIssueNestedInput_1.IssueUpdateManyWithoutParentIssueNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueUpdateManyWithoutParentIssueNestedInput_1.IssueUpdateManyWithoutParentIssueNestedInput)
], IssueUpdateWithoutAssigneeInput.prototype, "subIssues", void 0);
exports.IssueUpdateWithoutAssigneeInput = IssueUpdateWithoutAssigneeInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueUpdateWithoutAssigneeInput", {})
], IssueUpdateWithoutAssigneeInput);
