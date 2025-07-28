"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutAssignedIssuesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectCreateNestedManyWithoutLeadInput_1 = require("../inputs/ProjectCreateNestedManyWithoutLeadInput");
const TeamMemberCreateNestedManyWithoutUserInput_1 = require("../inputs/TeamMemberCreateNestedManyWithoutUserInput");
let UserCreateWithoutAssignedIssuesInput = class UserCreateWithoutAssignedIssuesInput {
};
exports.UserCreateWithoutAssignedIssuesInput = UserCreateWithoutAssignedIssuesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutAssignedIssuesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutAssignedIssuesInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutAssignedIssuesInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutAssignedIssuesInput.prototype, "avatarUrl", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutAssignedIssuesInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutAssignedIssuesInput.prototype, "role", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutAssignedIssuesInput.prototype, "joinedDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutAssignedIssuesInput.prototype, "teamIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutAssignedIssuesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutAssignedIssuesInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberCreateNestedManyWithoutUserInput_1.TeamMemberCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamMemberCreateNestedManyWithoutUserInput_1.TeamMemberCreateNestedManyWithoutUserInput)
], UserCreateWithoutAssignedIssuesInput.prototype, "teams", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectCreateNestedManyWithoutLeadInput_1.ProjectCreateNestedManyWithoutLeadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectCreateNestedManyWithoutLeadInput_1.ProjectCreateNestedManyWithoutLeadInput)
], UserCreateWithoutAssignedIssuesInput.prototype, "ledProjects", void 0);
exports.UserCreateWithoutAssignedIssuesInput = UserCreateWithoutAssignedIssuesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateWithoutAssignedIssuesInput", {})
], UserCreateWithoutAssignedIssuesInput);
