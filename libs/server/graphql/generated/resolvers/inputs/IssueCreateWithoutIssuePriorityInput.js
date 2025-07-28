"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueCreateWithoutIssuePriorityInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CycleCreateNestedOneWithoutIssuesInput_1 = require("../inputs/CycleCreateNestedOneWithoutIssuesInput");
const IssueCreateNestedManyWithoutParentIssueInput_1 = require("../inputs/IssueCreateNestedManyWithoutParentIssueInput");
const IssueCreateNestedOneWithoutSubIssuesInput_1 = require("../inputs/IssueCreateNestedOneWithoutSubIssuesInput");
const IssueLabelCreateNestedManyWithoutIssueInput_1 = require("../inputs/IssueLabelCreateNestedManyWithoutIssueInput");
const IssueStatusCreateNestedOneWithoutIssuesInput_1 = require("../inputs/IssueStatusCreateNestedOneWithoutIssuesInput");
const ProjectCreateNestedOneWithoutIssuesInput_1 = require("../inputs/ProjectCreateNestedOneWithoutIssuesInput");
const SubtaskCreateNestedOneWithoutIssuesInput_1 = require("../inputs/SubtaskCreateNestedOneWithoutIssuesInput");
const TaskCreateNestedOneWithoutIssuesInput_1 = require("../inputs/TaskCreateNestedOneWithoutIssuesInput");
const UserCreateNestedOneWithoutAssignedIssuesInput_1 = require("../inputs/UserCreateNestedOneWithoutAssignedIssuesInput");
let IssueCreateWithoutIssuePriorityInput = class IssueCreateWithoutIssuePriorityInput {
};
exports.IssueCreateWithoutIssuePriorityInput = IssueCreateWithoutIssuePriorityInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueCreateWithoutIssuePriorityInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IssueCreateWithoutIssuePriorityInput.prototype, "identifier", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IssueCreateWithoutIssuePriorityInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IssueCreateWithoutIssuePriorityInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueCreateWithoutIssuePriorityInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueCreateWithoutIssuePriorityInput.prototype, "priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IssueCreateWithoutIssuePriorityInput.prototype, "rank", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], IssueCreateWithoutIssuePriorityInput.prototype, "dueDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IssueCreateWithoutIssuePriorityInput.prototype, "issueType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], IssueCreateWithoutIssuePriorityInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], IssueCreateWithoutIssuePriorityInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutAssignedIssuesInput_1.UserCreateNestedOneWithoutAssignedIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutAssignedIssuesInput_1.UserCreateNestedOneWithoutAssignedIssuesInput)
], IssueCreateWithoutIssuePriorityInput.prototype, "assignee", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectCreateNestedOneWithoutIssuesInput_1.ProjectCreateNestedOneWithoutIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectCreateNestedOneWithoutIssuesInput_1.ProjectCreateNestedOneWithoutIssuesInput)
], IssueCreateWithoutIssuePriorityInput.prototype, "project", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleCreateNestedOneWithoutIssuesInput_1.CycleCreateNestedOneWithoutIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CycleCreateNestedOneWithoutIssuesInput_1.CycleCreateNestedOneWithoutIssuesInput)
], IssueCreateWithoutIssuePriorityInput.prototype, "cycle", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateNestedOneWithoutIssuesInput_1.TaskCreateNestedOneWithoutIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskCreateNestedOneWithoutIssuesInput_1.TaskCreateNestedOneWithoutIssuesInput)
], IssueCreateWithoutIssuePriorityInput.prototype, "task", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskCreateNestedOneWithoutIssuesInput_1.SubtaskCreateNestedOneWithoutIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubtaskCreateNestedOneWithoutIssuesInput_1.SubtaskCreateNestedOneWithoutIssuesInput)
], IssueCreateWithoutIssuePriorityInput.prototype, "subtask", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueStatusCreateNestedOneWithoutIssuesInput_1.IssueStatusCreateNestedOneWithoutIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueStatusCreateNestedOneWithoutIssuesInput_1.IssueStatusCreateNestedOneWithoutIssuesInput)
], IssueCreateWithoutIssuePriorityInput.prototype, "issueStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueLabelCreateNestedManyWithoutIssueInput_1.IssueLabelCreateNestedManyWithoutIssueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueLabelCreateNestedManyWithoutIssueInput_1.IssueLabelCreateNestedManyWithoutIssueInput)
], IssueCreateWithoutIssuePriorityInput.prototype, "labels", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateNestedOneWithoutSubIssuesInput_1.IssueCreateNestedOneWithoutSubIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueCreateNestedOneWithoutSubIssuesInput_1.IssueCreateNestedOneWithoutSubIssuesInput)
], IssueCreateWithoutIssuePriorityInput.prototype, "parentIssue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateNestedManyWithoutParentIssueInput_1.IssueCreateNestedManyWithoutParentIssueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueCreateNestedManyWithoutParentIssueInput_1.IssueCreateNestedManyWithoutParentIssueInput)
], IssueCreateWithoutIssuePriorityInput.prototype, "subIssues", void 0);
exports.IssueCreateWithoutIssuePriorityInput = IssueCreateWithoutIssuePriorityInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueCreateWithoutIssuePriorityInput", {})
], IssueCreateWithoutIssuePriorityInput);
