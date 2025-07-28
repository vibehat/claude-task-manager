"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectCreateWithoutIssuesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamProjectCreateNestedManyWithoutProjectInput_1 = require("../inputs/TeamProjectCreateNestedManyWithoutProjectInput");
const UserCreateNestedOneWithoutLedProjectsInput_1 = require("../inputs/UserCreateNestedOneWithoutLedProjectsInput");
let ProjectCreateWithoutIssuesInput = class ProjectCreateWithoutIssuesInput {
};
exports.ProjectCreateWithoutIssuesInput = ProjectCreateWithoutIssuesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectCreateWithoutIssuesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProjectCreateWithoutIssuesInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectCreateWithoutIssuesInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectCreateWithoutIssuesInput.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectCreateWithoutIssuesInput.prototype, "identifier", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectCreateWithoutIssuesInput.prototype, "icon", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProjectCreateWithoutIssuesInput.prototype, "percentComplete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProjectCreateWithoutIssuesInput.prototype, "startDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectCreateWithoutIssuesInput.prototype, "health", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProjectCreateWithoutIssuesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProjectCreateWithoutIssuesInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutLedProjectsInput_1.UserCreateNestedOneWithoutLedProjectsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutLedProjectsInput_1.UserCreateNestedOneWithoutLedProjectsInput)
], ProjectCreateWithoutIssuesInput.prototype, "lead", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamProjectCreateNestedManyWithoutProjectInput_1.TeamProjectCreateNestedManyWithoutProjectInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamProjectCreateNestedManyWithoutProjectInput_1.TeamProjectCreateNestedManyWithoutProjectInput)
], ProjectCreateWithoutIssuesInput.prototype, "teams", void 0);
exports.ProjectCreateWithoutIssuesInput = ProjectCreateWithoutIssuesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProjectCreateWithoutIssuesInput", {})
], ProjectCreateWithoutIssuesInput);
