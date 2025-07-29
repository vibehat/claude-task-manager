"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssuePriorityWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const IssueListRelationFilter_1 = require("../inputs/IssueListRelationFilter");
const IssuePriorityWhereInput_1 = require("../inputs/IssuePriorityWhereInput");
const StringFilter_1 = require("../inputs/StringFilter");
let IssuePriorityWhereUniqueInput = class IssuePriorityWhereUniqueInput {
};
exports.IssuePriorityWhereUniqueInput = IssuePriorityWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssuePriorityWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssuePriorityWhereInput_1.IssuePriorityWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssuePriorityWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssuePriorityWhereInput_1.IssuePriorityWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssuePriorityWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssuePriorityWhereInput_1.IssuePriorityWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssuePriorityWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], IssuePriorityWhereUniqueInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], IssuePriorityWhereUniqueInput.prototype, "iconName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], IssuePriorityWhereUniqueInput.prototype, "order", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], IssuePriorityWhereUniqueInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], IssuePriorityWhereUniqueInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueListRelationFilter_1.IssueListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueListRelationFilter_1.IssueListRelationFilter)
], IssuePriorityWhereUniqueInput.prototype, "issues", void 0);
exports.IssuePriorityWhereUniqueInput = IssuePriorityWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssuePriorityWhereUniqueInput", {})
], IssuePriorityWhereUniqueInput);
