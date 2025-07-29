"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueStatusWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IssueListRelationFilter_1 = require("../inputs/IssueListRelationFilter");
const IssueStatusWhereInput_1 = require("../inputs/IssueStatusWhereInput");
const StringFilter_1 = require("../inputs/StringFilter");
let IssueStatusWhereUniqueInput = class IssueStatusWhereUniqueInput {
};
exports.IssueStatusWhereUniqueInput = IssueStatusWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueStatusWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueStatusWhereInput_1.IssueStatusWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueStatusWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueStatusWhereInput_1.IssueStatusWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueStatusWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueStatusWhereInput_1.IssueStatusWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueStatusWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], IssueStatusWhereUniqueInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], IssueStatusWhereUniqueInput.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], IssueStatusWhereUniqueInput.prototype, "iconName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], IssueStatusWhereUniqueInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], IssueStatusWhereUniqueInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueListRelationFilter_1.IssueListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueListRelationFilter_1.IssueListRelationFilter)
], IssueStatusWhereUniqueInput.prototype, "issues", void 0);
exports.IssueStatusWhereUniqueInput = IssueStatusWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueStatusWhereUniqueInput", {})
], IssueStatusWhereUniqueInput);
