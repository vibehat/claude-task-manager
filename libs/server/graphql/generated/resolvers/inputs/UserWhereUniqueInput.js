"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IssueListRelationFilter_1 = require("../inputs/IssueListRelationFilter");
const ProjectListRelationFilter_1 = require("../inputs/ProjectListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const TeamMemberListRelationFilter_1 = require("../inputs/TeamMemberListRelationFilter");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserWhereUniqueInput = class UserWhereUniqueInput {
};
exports.UserWhereUniqueInput = UserWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserWhereUniqueInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereInput_1.UserWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereInput_1.UserWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereInput_1.UserWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], UserWhereUniqueInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], UserWhereUniqueInput.prototype, "avatarUrl", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], UserWhereUniqueInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], UserWhereUniqueInput.prototype, "role", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], UserWhereUniqueInput.prototype, "joinedDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], UserWhereUniqueInput.prototype, "teamIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], UserWhereUniqueInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], UserWhereUniqueInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueListRelationFilter_1.IssueListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueListRelationFilter_1.IssueListRelationFilter)
], UserWhereUniqueInput.prototype, "assignedIssues", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberListRelationFilter_1.TeamMemberListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamMemberListRelationFilter_1.TeamMemberListRelationFilter)
], UserWhereUniqueInput.prototype, "teams", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectListRelationFilter_1.ProjectListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectListRelationFilter_1.ProjectListRelationFilter)
], UserWhereUniqueInput.prototype, "ledProjects", void 0);
exports.UserWhereUniqueInput = UserWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserWhereUniqueInput", {})
], UserWhereUniqueInput);
