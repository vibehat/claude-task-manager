"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByIssueLabelArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueLabelOrderByWithAggregationInput_1 = require("../../../inputs/IssueLabelOrderByWithAggregationInput");
const IssueLabelScalarWhereWithAggregatesInput_1 = require("../../../inputs/IssueLabelScalarWhereWithAggregatesInput");
const IssueLabelWhereInput_1 = require("../../../inputs/IssueLabelWhereInput");
const IssueLabelScalarFieldEnum_1 = require("../../../../enums/IssueLabelScalarFieldEnum");
let GroupByIssueLabelArgs = class GroupByIssueLabelArgs {
};
exports.GroupByIssueLabelArgs = GroupByIssueLabelArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueLabelWhereInput_1.IssueLabelWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueLabelWhereInput_1.IssueLabelWhereInput)
], GroupByIssueLabelArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueLabelOrderByWithAggregationInput_1.IssueLabelOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByIssueLabelArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueLabelScalarFieldEnum_1.IssueLabelScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByIssueLabelArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueLabelScalarWhereWithAggregatesInput_1.IssueLabelScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueLabelScalarWhereWithAggregatesInput_1.IssueLabelScalarWhereWithAggregatesInput)
], GroupByIssueLabelArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByIssueLabelArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByIssueLabelArgs.prototype, "skip", void 0);
exports.GroupByIssueLabelArgs = GroupByIssueLabelArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByIssueLabelArgs);
