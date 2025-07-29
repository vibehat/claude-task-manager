"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateNestedManyWithoutProjectInput_1 = require("../inputs/IssueCreateNestedManyWithoutProjectInput");
const TeamProjectCreateNestedManyWithoutProjectInput_1 = require("../inputs/TeamProjectCreateNestedManyWithoutProjectInput");
const UserCreateNestedOneWithoutLedProjectsInput_1 = require("../inputs/UserCreateNestedOneWithoutLedProjectsInput");
let ProjectCreateInput = class ProjectCreateInput {
};
exports.ProjectCreateInput = ProjectCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProjectCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectCreateInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectCreateInput.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectCreateInput.prototype, "identifier", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectCreateInput.prototype, "icon", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProjectCreateInput.prototype, "percentComplete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProjectCreateInput.prototype, "startDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectCreateInput.prototype, "health", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProjectCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProjectCreateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateNestedManyWithoutProjectInput_1.IssueCreateNestedManyWithoutProjectInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueCreateNestedManyWithoutProjectInput_1.IssueCreateNestedManyWithoutProjectInput)
], ProjectCreateInput.prototype, "issues", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutLedProjectsInput_1.UserCreateNestedOneWithoutLedProjectsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutLedProjectsInput_1.UserCreateNestedOneWithoutLedProjectsInput)
], ProjectCreateInput.prototype, "lead", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamProjectCreateNestedManyWithoutProjectInput_1.TeamProjectCreateNestedManyWithoutProjectInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamProjectCreateNestedManyWithoutProjectInput_1.TeamProjectCreateNestedManyWithoutProjectInput)
], ProjectCreateInput.prototype, "teams", void 0);
exports.ProjectCreateInput = ProjectCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProjectCreateInput", {})
], ProjectCreateInput);
