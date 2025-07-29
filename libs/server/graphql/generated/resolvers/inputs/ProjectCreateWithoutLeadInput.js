"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectCreateWithoutLeadInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateNestedManyWithoutProjectInput_1 = require("../inputs/IssueCreateNestedManyWithoutProjectInput");
const TeamProjectCreateNestedManyWithoutProjectInput_1 = require("../inputs/TeamProjectCreateNestedManyWithoutProjectInput");
let ProjectCreateWithoutLeadInput = class ProjectCreateWithoutLeadInput {
};
exports.ProjectCreateWithoutLeadInput = ProjectCreateWithoutLeadInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectCreateWithoutLeadInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProjectCreateWithoutLeadInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectCreateWithoutLeadInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectCreateWithoutLeadInput.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectCreateWithoutLeadInput.prototype, "identifier", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectCreateWithoutLeadInput.prototype, "icon", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProjectCreateWithoutLeadInput.prototype, "percentComplete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProjectCreateWithoutLeadInput.prototype, "startDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectCreateWithoutLeadInput.prototype, "health", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProjectCreateWithoutLeadInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProjectCreateWithoutLeadInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateNestedManyWithoutProjectInput_1.IssueCreateNestedManyWithoutProjectInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueCreateNestedManyWithoutProjectInput_1.IssueCreateNestedManyWithoutProjectInput)
], ProjectCreateWithoutLeadInput.prototype, "issues", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamProjectCreateNestedManyWithoutProjectInput_1.TeamProjectCreateNestedManyWithoutProjectInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamProjectCreateNestedManyWithoutProjectInput_1.TeamProjectCreateNestedManyWithoutProjectInput)
], ProjectCreateWithoutLeadInput.prototype, "teams", void 0);
exports.ProjectCreateWithoutLeadInput = ProjectCreateWithoutLeadInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProjectCreateWithoutLeadInput", {})
], ProjectCreateWithoutLeadInput);
