"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateNestedManyWithoutAssigneeInput_1 = require("../inputs/IssueCreateNestedManyWithoutAssigneeInput");
const ProjectCreateNestedManyWithoutLeadInput_1 = require("../inputs/ProjectCreateNestedManyWithoutLeadInput");
const TeamMemberCreateNestedManyWithoutUserInput_1 = require("../inputs/TeamMemberCreateNestedManyWithoutUserInput");
let UserCreateInput = class UserCreateInput {
};
exports.UserCreateInput = UserCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateInput.prototype, "avatarUrl", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateInput.prototype, "role", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateInput.prototype, "joinedDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateInput.prototype, "teamIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateNestedManyWithoutAssigneeInput_1.IssueCreateNestedManyWithoutAssigneeInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueCreateNestedManyWithoutAssigneeInput_1.IssueCreateNestedManyWithoutAssigneeInput)
], UserCreateInput.prototype, "assignedIssues", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberCreateNestedManyWithoutUserInput_1.TeamMemberCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamMemberCreateNestedManyWithoutUserInput_1.TeamMemberCreateNestedManyWithoutUserInput)
], UserCreateInput.prototype, "teams", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectCreateNestedManyWithoutLeadInput_1.ProjectCreateNestedManyWithoutLeadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectCreateNestedManyWithoutLeadInput_1.ProjectCreateNestedManyWithoutLeadInput)
], UserCreateInput.prototype, "ledProjects", void 0);
exports.UserCreateInput = UserCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateInput", {})
], UserCreateInput);
