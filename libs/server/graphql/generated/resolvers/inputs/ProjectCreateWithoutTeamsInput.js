"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectCreateWithoutTeamsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateNestedManyWithoutProjectInput_1 = require("../inputs/IssueCreateNestedManyWithoutProjectInput");
const UserCreateNestedOneWithoutLedProjectsInput_1 = require("../inputs/UserCreateNestedOneWithoutLedProjectsInput");
let ProjectCreateWithoutTeamsInput = class ProjectCreateWithoutTeamsInput {
};
exports.ProjectCreateWithoutTeamsInput = ProjectCreateWithoutTeamsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectCreateWithoutTeamsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProjectCreateWithoutTeamsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectCreateWithoutTeamsInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectCreateWithoutTeamsInput.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectCreateWithoutTeamsInput.prototype, "identifier", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectCreateWithoutTeamsInput.prototype, "icon", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProjectCreateWithoutTeamsInput.prototype, "percentComplete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProjectCreateWithoutTeamsInput.prototype, "startDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectCreateWithoutTeamsInput.prototype, "health", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProjectCreateWithoutTeamsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProjectCreateWithoutTeamsInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateNestedManyWithoutProjectInput_1.IssueCreateNestedManyWithoutProjectInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueCreateNestedManyWithoutProjectInput_1.IssueCreateNestedManyWithoutProjectInput)
], ProjectCreateWithoutTeamsInput.prototype, "issues", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutLedProjectsInput_1.UserCreateNestedOneWithoutLedProjectsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutLedProjectsInput_1.UserCreateNestedOneWithoutLedProjectsInput)
], ProjectCreateWithoutTeamsInput.prototype, "lead", void 0);
exports.ProjectCreateWithoutTeamsInput = ProjectCreateWithoutTeamsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProjectCreateWithoutTeamsInput", {})
], ProjectCreateWithoutTeamsInput);
