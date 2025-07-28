"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutTeamsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateNestedManyWithoutAssigneeInput_1 = require("../inputs/IssueCreateNestedManyWithoutAssigneeInput");
const ProjectCreateNestedManyWithoutLeadInput_1 = require("../inputs/ProjectCreateNestedManyWithoutLeadInput");
let UserCreateWithoutTeamsInput = class UserCreateWithoutTeamsInput {
};
exports.UserCreateWithoutTeamsInput = UserCreateWithoutTeamsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutTeamsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutTeamsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutTeamsInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutTeamsInput.prototype, "avatarUrl", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutTeamsInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutTeamsInput.prototype, "role", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutTeamsInput.prototype, "joinedDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutTeamsInput.prototype, "teamIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutTeamsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutTeamsInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateNestedManyWithoutAssigneeInput_1.IssueCreateNestedManyWithoutAssigneeInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueCreateNestedManyWithoutAssigneeInput_1.IssueCreateNestedManyWithoutAssigneeInput)
], UserCreateWithoutTeamsInput.prototype, "assignedIssues", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectCreateNestedManyWithoutLeadInput_1.ProjectCreateNestedManyWithoutLeadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectCreateNestedManyWithoutLeadInput_1.ProjectCreateNestedManyWithoutLeadInput)
], UserCreateWithoutTeamsInput.prototype, "ledProjects", void 0);
exports.UserCreateWithoutTeamsInput = UserCreateWithoutTeamsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateWithoutTeamsInput", {})
], UserCreateWithoutTeamsInput);
