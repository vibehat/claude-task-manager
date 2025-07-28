"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByIssueStatusArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueStatusOrderByWithAggregationInput_1 = require("../../../inputs/IssueStatusOrderByWithAggregationInput");
const IssueStatusScalarWhereWithAggregatesInput_1 = require("../../../inputs/IssueStatusScalarWhereWithAggregatesInput");
const IssueStatusWhereInput_1 = require("../../../inputs/IssueStatusWhereInput");
const IssueStatusScalarFieldEnum_1 = require("../../../../enums/IssueStatusScalarFieldEnum");
let GroupByIssueStatusArgs = class GroupByIssueStatusArgs {
};
exports.GroupByIssueStatusArgs = GroupByIssueStatusArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueStatusWhereInput_1.IssueStatusWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueStatusWhereInput_1.IssueStatusWhereInput)
], GroupByIssueStatusArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueStatusOrderByWithAggregationInput_1.IssueStatusOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByIssueStatusArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueStatusScalarFieldEnum_1.IssueStatusScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByIssueStatusArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueStatusScalarWhereWithAggregatesInput_1.IssueStatusScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueStatusScalarWhereWithAggregatesInput_1.IssueStatusScalarWhereWithAggregatesInput)
], GroupByIssueStatusArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByIssueStatusArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByIssueStatusArgs.prototype, "skip", void 0);
exports.GroupByIssueStatusArgs = GroupByIssueStatusArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByIssueStatusArgs);
