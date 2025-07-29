"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueCreateWithoutCycleInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateNestedManyWithoutParentIssueInput_1 = require("../inputs/IssueCreateNestedManyWithoutParentIssueInput");
const IssueCreateNestedOneWithoutSubIssuesInput_1 = require("../inputs/IssueCreateNestedOneWithoutSubIssuesInput");
const IssueLabelCreateNestedManyWithoutIssueInput_1 = require("../inputs/IssueLabelCreateNestedManyWithoutIssueInput");
const IssuePriorityCreateNestedOneWithoutIssuesInput_1 = require("../inputs/IssuePriorityCreateNestedOneWithoutIssuesInput");
const IssueStatusCreateNestedOneWithoutIssuesInput_1 = require("../inputs/IssueStatusCreateNestedOneWithoutIssuesInput");
const ProjectCreateNestedOneWithoutIssuesInput_1 = require("../inputs/ProjectCreateNestedOneWithoutIssuesInput");
const SubtaskCreateNestedOneWithoutIssuesInput_1 = require("../inputs/SubtaskCreateNestedOneWithoutIssuesInput");
const TaskCreateNestedOneWithoutIssuesInput_1 = require("../inputs/TaskCreateNestedOneWithoutIssuesInput");
const UserCreateNestedOneWithoutAssignedIssuesInput_1 = require("../inputs/UserCreateNestedOneWithoutAssignedIssuesInput");
let IssueCreateWithoutCycleInput = class IssueCreateWithoutCycleInput {
};
exports.IssueCreateWithoutCycleInput = IssueCreateWithoutCycleInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueCreateWithoutCycleInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IssueCreateWithoutCycleInput.prototype, "identifier", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IssueCreateWithoutCycleInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IssueCreateWithoutCycleInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueCreateWithoutCycleInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueCreateWithoutCycleInput.prototype, "priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IssueCreateWithoutCycleInput.prototype, "rank", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], IssueCreateWithoutCycleInput.prototype, "dueDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IssueCreateWithoutCycleInput.prototype, "issueType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], IssueCreateWithoutCycleInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], IssueCreateWithoutCycleInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutAssignedIssuesInput_1.UserCreateNestedOneWithoutAssignedIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutAssignedIssuesInput_1.UserCreateNestedOneWithoutAssignedIssuesInput)
], IssueCreateWithoutCycleInput.prototype, "assignee", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectCreateNestedOneWithoutIssuesInput_1.ProjectCreateNestedOneWithoutIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectCreateNestedOneWithoutIssuesInput_1.ProjectCreateNestedOneWithoutIssuesInput)
], IssueCreateWithoutCycleInput.prototype, "project", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateNestedOneWithoutIssuesInput_1.TaskCreateNestedOneWithoutIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskCreateNestedOneWithoutIssuesInput_1.TaskCreateNestedOneWithoutIssuesInput)
], IssueCreateWithoutCycleInput.prototype, "task", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskCreateNestedOneWithoutIssuesInput_1.SubtaskCreateNestedOneWithoutIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubtaskCreateNestedOneWithoutIssuesInput_1.SubtaskCreateNestedOneWithoutIssuesInput)
], IssueCreateWithoutCycleInput.prototype, "subtask", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueStatusCreateNestedOneWithoutIssuesInput_1.IssueStatusCreateNestedOneWithoutIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueStatusCreateNestedOneWithoutIssuesInput_1.IssueStatusCreateNestedOneWithoutIssuesInput)
], IssueCreateWithoutCycleInput.prototype, "issueStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssuePriorityCreateNestedOneWithoutIssuesInput_1.IssuePriorityCreateNestedOneWithoutIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssuePriorityCreateNestedOneWithoutIssuesInput_1.IssuePriorityCreateNestedOneWithoutIssuesInput)
], IssueCreateWithoutCycleInput.prototype, "issuePriority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueLabelCreateNestedManyWithoutIssueInput_1.IssueLabelCreateNestedManyWithoutIssueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueLabelCreateNestedManyWithoutIssueInput_1.IssueLabelCreateNestedManyWithoutIssueInput)
], IssueCreateWithoutCycleInput.prototype, "labels", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateNestedOneWithoutSubIssuesInput_1.IssueCreateNestedOneWithoutSubIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueCreateNestedOneWithoutSubIssuesInput_1.IssueCreateNestedOneWithoutSubIssuesInput)
], IssueCreateWithoutCycleInput.prototype, "parentIssue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateNestedManyWithoutParentIssueInput_1.IssueCreateNestedManyWithoutParentIssueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueCreateNestedManyWithoutParentIssueInput_1.IssueCreateNestedManyWithoutParentIssueInput)
], IssueCreateWithoutCycleInput.prototype, "subIssues", void 0);
exports.IssueCreateWithoutCycleInput = IssueCreateWithoutCycleInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueCreateWithoutCycleInput", {})
], IssueCreateWithoutCycleInput);
