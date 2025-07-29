"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueUpdateWithoutParentIssueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CycleUpdateOneWithoutIssuesNestedInput_1 = require("../inputs/CycleUpdateOneWithoutIssuesNestedInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const IssueLabelUpdateManyWithoutIssueNestedInput_1 = require("../inputs/IssueLabelUpdateManyWithoutIssueNestedInput");
const IssuePriorityUpdateOneWithoutIssuesNestedInput_1 = require("../inputs/IssuePriorityUpdateOneWithoutIssuesNestedInput");
const IssueStatusUpdateOneWithoutIssuesNestedInput_1 = require("../inputs/IssueStatusUpdateOneWithoutIssuesNestedInput");
const IssueUpdateManyWithoutParentIssueNestedInput_1 = require("../inputs/IssueUpdateManyWithoutParentIssueNestedInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const ProjectUpdateOneWithoutIssuesNestedInput_1 = require("../inputs/ProjectUpdateOneWithoutIssuesNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const SubtaskUpdateOneWithoutIssuesNestedInput_1 = require("../inputs/SubtaskUpdateOneWithoutIssuesNestedInput");
const TaskUpdateOneWithoutIssuesNestedInput_1 = require("../inputs/TaskUpdateOneWithoutIssuesNestedInput");
const UserUpdateOneWithoutAssignedIssuesNestedInput_1 = require("../inputs/UserUpdateOneWithoutAssignedIssuesNestedInput");
let IssueUpdateWithoutParentIssueInput = class IssueUpdateWithoutParentIssueInput {
};
exports.IssueUpdateWithoutParentIssueInput = IssueUpdateWithoutParentIssueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], IssueUpdateWithoutParentIssueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], IssueUpdateWithoutParentIssueInput.prototype, "identifier", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], IssueUpdateWithoutParentIssueInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], IssueUpdateWithoutParentIssueInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], IssueUpdateWithoutParentIssueInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], IssueUpdateWithoutParentIssueInput.prototype, "priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], IssueUpdateWithoutParentIssueInput.prototype, "rank", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], IssueUpdateWithoutParentIssueInput.prototype, "dueDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], IssueUpdateWithoutParentIssueInput.prototype, "issueType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], IssueUpdateWithoutParentIssueInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], IssueUpdateWithoutParentIssueInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneWithoutAssignedIssuesNestedInput_1.UserUpdateOneWithoutAssignedIssuesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneWithoutAssignedIssuesNestedInput_1.UserUpdateOneWithoutAssignedIssuesNestedInput)
], IssueUpdateWithoutParentIssueInput.prototype, "assignee", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectUpdateOneWithoutIssuesNestedInput_1.ProjectUpdateOneWithoutIssuesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectUpdateOneWithoutIssuesNestedInput_1.ProjectUpdateOneWithoutIssuesNestedInput)
], IssueUpdateWithoutParentIssueInput.prototype, "project", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleUpdateOneWithoutIssuesNestedInput_1.CycleUpdateOneWithoutIssuesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CycleUpdateOneWithoutIssuesNestedInput_1.CycleUpdateOneWithoutIssuesNestedInput)
], IssueUpdateWithoutParentIssueInput.prototype, "cycle", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskUpdateOneWithoutIssuesNestedInput_1.TaskUpdateOneWithoutIssuesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskUpdateOneWithoutIssuesNestedInput_1.TaskUpdateOneWithoutIssuesNestedInput)
], IssueUpdateWithoutParentIssueInput.prototype, "task", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskUpdateOneWithoutIssuesNestedInput_1.SubtaskUpdateOneWithoutIssuesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubtaskUpdateOneWithoutIssuesNestedInput_1.SubtaskUpdateOneWithoutIssuesNestedInput)
], IssueUpdateWithoutParentIssueInput.prototype, "subtask", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueStatusUpdateOneWithoutIssuesNestedInput_1.IssueStatusUpdateOneWithoutIssuesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueStatusUpdateOneWithoutIssuesNestedInput_1.IssueStatusUpdateOneWithoutIssuesNestedInput)
], IssueUpdateWithoutParentIssueInput.prototype, "issueStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssuePriorityUpdateOneWithoutIssuesNestedInput_1.IssuePriorityUpdateOneWithoutIssuesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssuePriorityUpdateOneWithoutIssuesNestedInput_1.IssuePriorityUpdateOneWithoutIssuesNestedInput)
], IssueUpdateWithoutParentIssueInput.prototype, "issuePriority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueLabelUpdateManyWithoutIssueNestedInput_1.IssueLabelUpdateManyWithoutIssueNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueLabelUpdateManyWithoutIssueNestedInput_1.IssueLabelUpdateManyWithoutIssueNestedInput)
], IssueUpdateWithoutParentIssueInput.prototype, "labels", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueUpdateManyWithoutParentIssueNestedInput_1.IssueUpdateManyWithoutParentIssueNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueUpdateManyWithoutParentIssueNestedInput_1.IssueUpdateManyWithoutParentIssueNestedInput)
], IssueUpdateWithoutParentIssueInput.prototype, "subIssues", void 0);
exports.IssueUpdateWithoutParentIssueInput = IssueUpdateWithoutParentIssueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueUpdateWithoutParentIssueInput", {})
], IssueUpdateWithoutParentIssueInput);
