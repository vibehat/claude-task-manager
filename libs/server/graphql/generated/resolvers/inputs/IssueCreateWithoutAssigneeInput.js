"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueCreateWithoutAssigneeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CycleCreateNestedOneWithoutIssuesInput_1 = require("../inputs/CycleCreateNestedOneWithoutIssuesInput");
const IssueCreateNestedManyWithoutParentIssueInput_1 = require("../inputs/IssueCreateNestedManyWithoutParentIssueInput");
const IssueCreateNestedOneWithoutSubIssuesInput_1 = require("../inputs/IssueCreateNestedOneWithoutSubIssuesInput");
const IssueLabelCreateNestedManyWithoutIssueInput_1 = require("../inputs/IssueLabelCreateNestedManyWithoutIssueInput");
const IssuePriorityCreateNestedOneWithoutIssuesInput_1 = require("../inputs/IssuePriorityCreateNestedOneWithoutIssuesInput");
const IssueStatusCreateNestedOneWithoutIssuesInput_1 = require("../inputs/IssueStatusCreateNestedOneWithoutIssuesInput");
const ProjectCreateNestedOneWithoutIssuesInput_1 = require("../inputs/ProjectCreateNestedOneWithoutIssuesInput");
const SubtaskCreateNestedOneWithoutIssuesInput_1 = require("../inputs/SubtaskCreateNestedOneWithoutIssuesInput");
const TaskCreateNestedOneWithoutIssuesInput_1 = require("../inputs/TaskCreateNestedOneWithoutIssuesInput");
let IssueCreateWithoutAssigneeInput = class IssueCreateWithoutAssigneeInput {
};
exports.IssueCreateWithoutAssigneeInput = IssueCreateWithoutAssigneeInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueCreateWithoutAssigneeInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IssueCreateWithoutAssigneeInput.prototype, "identifier", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IssueCreateWithoutAssigneeInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IssueCreateWithoutAssigneeInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueCreateWithoutAssigneeInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueCreateWithoutAssigneeInput.prototype, "priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IssueCreateWithoutAssigneeInput.prototype, "rank", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], IssueCreateWithoutAssigneeInput.prototype, "dueDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IssueCreateWithoutAssigneeInput.prototype, "issueType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], IssueCreateWithoutAssigneeInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], IssueCreateWithoutAssigneeInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectCreateNestedOneWithoutIssuesInput_1.ProjectCreateNestedOneWithoutIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectCreateNestedOneWithoutIssuesInput_1.ProjectCreateNestedOneWithoutIssuesInput)
], IssueCreateWithoutAssigneeInput.prototype, "project", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleCreateNestedOneWithoutIssuesInput_1.CycleCreateNestedOneWithoutIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CycleCreateNestedOneWithoutIssuesInput_1.CycleCreateNestedOneWithoutIssuesInput)
], IssueCreateWithoutAssigneeInput.prototype, "cycle", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateNestedOneWithoutIssuesInput_1.TaskCreateNestedOneWithoutIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskCreateNestedOneWithoutIssuesInput_1.TaskCreateNestedOneWithoutIssuesInput)
], IssueCreateWithoutAssigneeInput.prototype, "task", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskCreateNestedOneWithoutIssuesInput_1.SubtaskCreateNestedOneWithoutIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubtaskCreateNestedOneWithoutIssuesInput_1.SubtaskCreateNestedOneWithoutIssuesInput)
], IssueCreateWithoutAssigneeInput.prototype, "subtask", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueStatusCreateNestedOneWithoutIssuesInput_1.IssueStatusCreateNestedOneWithoutIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueStatusCreateNestedOneWithoutIssuesInput_1.IssueStatusCreateNestedOneWithoutIssuesInput)
], IssueCreateWithoutAssigneeInput.prototype, "issueStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssuePriorityCreateNestedOneWithoutIssuesInput_1.IssuePriorityCreateNestedOneWithoutIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssuePriorityCreateNestedOneWithoutIssuesInput_1.IssuePriorityCreateNestedOneWithoutIssuesInput)
], IssueCreateWithoutAssigneeInput.prototype, "issuePriority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueLabelCreateNestedManyWithoutIssueInput_1.IssueLabelCreateNestedManyWithoutIssueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueLabelCreateNestedManyWithoutIssueInput_1.IssueLabelCreateNestedManyWithoutIssueInput)
], IssueCreateWithoutAssigneeInput.prototype, "labels", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateNestedOneWithoutSubIssuesInput_1.IssueCreateNestedOneWithoutSubIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueCreateNestedOneWithoutSubIssuesInput_1.IssueCreateNestedOneWithoutSubIssuesInput)
], IssueCreateWithoutAssigneeInput.prototype, "parentIssue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateNestedManyWithoutParentIssueInput_1.IssueCreateNestedManyWithoutParentIssueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueCreateNestedManyWithoutParentIssueInput_1.IssueCreateNestedManyWithoutParentIssueInput)
], IssueCreateWithoutAssigneeInput.prototype, "subIssues", void 0);
exports.IssueCreateWithoutAssigneeInput = IssueCreateWithoutAssigneeInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueCreateWithoutAssigneeInput", {})
], IssueCreateWithoutAssigneeInput);
