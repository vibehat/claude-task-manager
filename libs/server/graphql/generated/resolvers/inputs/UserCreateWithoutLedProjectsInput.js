"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutLedProjectsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateNestedManyWithoutAssigneeInput_1 = require("../inputs/IssueCreateNestedManyWithoutAssigneeInput");
const TeamMemberCreateNestedManyWithoutUserInput_1 = require("../inputs/TeamMemberCreateNestedManyWithoutUserInput");
let UserCreateWithoutLedProjectsInput = class UserCreateWithoutLedProjectsInput {
};
exports.UserCreateWithoutLedProjectsInput = UserCreateWithoutLedProjectsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutLedProjectsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutLedProjectsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutLedProjectsInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutLedProjectsInput.prototype, "avatarUrl", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutLedProjectsInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutLedProjectsInput.prototype, "role", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutLedProjectsInput.prototype, "joinedDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutLedProjectsInput.prototype, "teamIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutLedProjectsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutLedProjectsInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateNestedManyWithoutAssigneeInput_1.IssueCreateNestedManyWithoutAssigneeInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueCreateNestedManyWithoutAssigneeInput_1.IssueCreateNestedManyWithoutAssigneeInput)
], UserCreateWithoutLedProjectsInput.prototype, "assignedIssues", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberCreateNestedManyWithoutUserInput_1.TeamMemberCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamMemberCreateNestedManyWithoutUserInput_1.TeamMemberCreateNestedManyWithoutUserInput)
], UserCreateWithoutLedProjectsInput.prototype, "teams", void 0);
exports.UserCreateWithoutLedProjectsInput = UserCreateWithoutLedProjectsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateWithoutLedProjectsInput", {})
], UserCreateWithoutLedProjectsInput);
