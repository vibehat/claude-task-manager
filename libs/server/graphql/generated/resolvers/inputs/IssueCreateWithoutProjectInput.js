"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueCreateWithoutProjectInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CycleCreateNestedOneWithoutIssuesInput_1 = require("../inputs/CycleCreateNestedOneWithoutIssuesInput");
const IssueCreateNestedManyWithoutParentIssueInput_1 = require("../inputs/IssueCreateNestedManyWithoutParentIssueInput");
const IssueCreateNestedOneWithoutSubIssuesInput_1 = require("../inputs/IssueCreateNestedOneWithoutSubIssuesInput");
const IssueLabelCreateNestedManyWithoutIssueInput_1 = require("../inputs/IssueLabelCreateNestedManyWithoutIssueInput");
const IssuePriorityCreateNestedOneWithoutIssuesInput_1 = require("../inputs/IssuePriorityCreateNestedOneWithoutIssuesInput");
const IssueStatusCreateNestedOneWithoutIssuesInput_1 = require("../inputs/IssueStatusCreateNestedOneWithoutIssuesInput");
const SubtaskCreateNestedOneWithoutIssuesInput_1 = require("../inputs/SubtaskCreateNestedOneWithoutIssuesInput");
const TaskCreateNestedOneWithoutIssuesInput_1 = require("../inputs/TaskCreateNestedOneWithoutIssuesInput");
const UserCreateNestedOneWithoutAssignedIssuesInput_1 = require("../inputs/UserCreateNestedOneWithoutAssignedIssuesInput");
let IssueCreateWithoutProjectInput = class IssueCreateWithoutProjectInput {
};
exports.IssueCreateWithoutProjectInput = IssueCreateWithoutProjectInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueCreateWithoutProjectInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IssueCreateWithoutProjectInput.prototype, "identifier", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IssueCreateWithoutProjectInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IssueCreateWithoutProjectInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueCreateWithoutProjectInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueCreateWithoutProjectInput.prototype, "priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IssueCreateWithoutProjectInput.prototype, "rank", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], IssueCreateWithoutProjectInput.prototype, "dueDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IssueCreateWithoutProjectInput.prototype, "issueType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], IssueCreateWithoutProjectInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], IssueCreateWithoutProjectInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutAssignedIssuesInput_1.UserCreateNestedOneWithoutAssignedIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutAssignedIssuesInput_1.UserCreateNestedOneWithoutAssignedIssuesInput)
], IssueCreateWithoutProjectInput.prototype, "assignee", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleCreateNestedOneWithoutIssuesInput_1.CycleCreateNestedOneWithoutIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CycleCreateNestedOneWithoutIssuesInput_1.CycleCreateNestedOneWithoutIssuesInput)
], IssueCreateWithoutProjectInput.prototype, "cycle", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateNestedOneWithoutIssuesInput_1.TaskCreateNestedOneWithoutIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskCreateNestedOneWithoutIssuesInput_1.TaskCreateNestedOneWithoutIssuesInput)
], IssueCreateWithoutProjectInput.prototype, "task", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskCreateNestedOneWithoutIssuesInput_1.SubtaskCreateNestedOneWithoutIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubtaskCreateNestedOneWithoutIssuesInput_1.SubtaskCreateNestedOneWithoutIssuesInput)
], IssueCreateWithoutProjectInput.prototype, "subtask", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueStatusCreateNestedOneWithoutIssuesInput_1.IssueStatusCreateNestedOneWithoutIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueStatusCreateNestedOneWithoutIssuesInput_1.IssueStatusCreateNestedOneWithoutIssuesInput)
], IssueCreateWithoutProjectInput.prototype, "issueStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssuePriorityCreateNestedOneWithoutIssuesInput_1.IssuePriorityCreateNestedOneWithoutIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssuePriorityCreateNestedOneWithoutIssuesInput_1.IssuePriorityCreateNestedOneWithoutIssuesInput)
], IssueCreateWithoutProjectInput.prototype, "issuePriority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueLabelCreateNestedManyWithoutIssueInput_1.IssueLabelCreateNestedManyWithoutIssueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueLabelCreateNestedManyWithoutIssueInput_1.IssueLabelCreateNestedManyWithoutIssueInput)
], IssueCreateWithoutProjectInput.prototype, "labels", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateNestedOneWithoutSubIssuesInput_1.IssueCreateNestedOneWithoutSubIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueCreateNestedOneWithoutSubIssuesInput_1.IssueCreateNestedOneWithoutSubIssuesInput)
], IssueCreateWithoutProjectInput.prototype, "parentIssue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateNestedManyWithoutParentIssueInput_1.IssueCreateNestedManyWithoutParentIssueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueCreateNestedManyWithoutParentIssueInput_1.IssueCreateNestedManyWithoutParentIssueInput)
], IssueCreateWithoutProjectInput.prototype, "subIssues", void 0);
exports.IssueCreateWithoutProjectInput = IssueCreateWithoutProjectInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueCreateWithoutProjectInput", {})
], IssueCreateWithoutProjectInput);
