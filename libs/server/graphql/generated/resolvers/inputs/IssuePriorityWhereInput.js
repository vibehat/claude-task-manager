"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssuePriorityWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const IssueListRelationFilter_1 = require("../inputs/IssueListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let IssuePriorityWhereInput = class IssuePriorityWhereInput {
};
exports.IssuePriorityWhereInput = IssuePriorityWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssuePriorityWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssuePriorityWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssuePriorityWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssuePriorityWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssuePriorityWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssuePriorityWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], IssuePriorityWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], IssuePriorityWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], IssuePriorityWhereInput.prototype, "iconName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], IssuePriorityWhereInput.prototype, "order", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], IssuePriorityWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], IssuePriorityWhereInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueListRelationFilter_1.IssueListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueListRelationFilter_1.IssueListRelationFilter)
], IssuePriorityWhereInput.prototype, "issues", void 0);
exports.IssuePriorityWhereInput = IssuePriorityWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssuePriorityWhereInput", {})
], IssuePriorityWhereInput);
