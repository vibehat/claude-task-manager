"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByIssuePriorityArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssuePriorityOrderByWithAggregationInput_1 = require("../../../inputs/IssuePriorityOrderByWithAggregationInput");
const IssuePriorityScalarWhereWithAggregatesInput_1 = require("../../../inputs/IssuePriorityScalarWhereWithAggregatesInput");
const IssuePriorityWhereInput_1 = require("../../../inputs/IssuePriorityWhereInput");
const IssuePriorityScalarFieldEnum_1 = require("../../../../enums/IssuePriorityScalarFieldEnum");
let GroupByIssuePriorityArgs = class GroupByIssuePriorityArgs {
};
exports.GroupByIssuePriorityArgs = GroupByIssuePriorityArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssuePriorityWhereInput_1.IssuePriorityWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssuePriorityWhereInput_1.IssuePriorityWhereInput)
], GroupByIssuePriorityArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssuePriorityOrderByWithAggregationInput_1.IssuePriorityOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByIssuePriorityArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssuePriorityScalarFieldEnum_1.IssuePriorityScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByIssuePriorityArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssuePriorityScalarWhereWithAggregatesInput_1.IssuePriorityScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssuePriorityScalarWhereWithAggregatesInput_1.IssuePriorityScalarWhereWithAggregatesInput)
], GroupByIssuePriorityArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByIssuePriorityArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByIssuePriorityArgs.prototype, "skip", void 0);
exports.GroupByIssuePriorityArgs = GroupByIssuePriorityArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByIssuePriorityArgs);
