"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByIssueArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueOrderByWithAggregationInput_1 = require("../../../inputs/IssueOrderByWithAggregationInput");
const IssueScalarWhereWithAggregatesInput_1 = require("../../../inputs/IssueScalarWhereWithAggregatesInput");
const IssueWhereInput_1 = require("../../../inputs/IssueWhereInput");
const IssueScalarFieldEnum_1 = require("../../../../enums/IssueScalarFieldEnum");
let GroupByIssueArgs = class GroupByIssueArgs {
};
exports.GroupByIssueArgs = GroupByIssueArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueWhereInput_1.IssueWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueWhereInput_1.IssueWhereInput)
], GroupByIssueArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueOrderByWithAggregationInput_1.IssueOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByIssueArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueScalarFieldEnum_1.IssueScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByIssueArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueScalarWhereWithAggregatesInput_1.IssueScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueScalarWhereWithAggregatesInput_1.IssueScalarWhereWithAggregatesInput)
], GroupByIssueArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByIssueArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByIssueArgs.prototype, "skip", void 0);
exports.GroupByIssueArgs = GroupByIssueArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByIssueArgs);
