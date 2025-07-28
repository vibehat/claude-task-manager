"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByLabelArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LabelOrderByWithAggregationInput_1 = require("../../../inputs/LabelOrderByWithAggregationInput");
const LabelScalarWhereWithAggregatesInput_1 = require("../../../inputs/LabelScalarWhereWithAggregatesInput");
const LabelWhereInput_1 = require("../../../inputs/LabelWhereInput");
const LabelScalarFieldEnum_1 = require("../../../../enums/LabelScalarFieldEnum");
let GroupByLabelArgs = class GroupByLabelArgs {
};
exports.GroupByLabelArgs = GroupByLabelArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LabelWhereInput_1.LabelWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LabelWhereInput_1.LabelWhereInput)
], GroupByLabelArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LabelOrderByWithAggregationInput_1.LabelOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByLabelArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LabelScalarFieldEnum_1.LabelScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByLabelArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LabelScalarWhereWithAggregatesInput_1.LabelScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LabelScalarWhereWithAggregatesInput_1.LabelScalarWhereWithAggregatesInput)
], GroupByLabelArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByLabelArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByLabelArgs.prototype, "skip", void 0);
exports.GroupByLabelArgs = GroupByLabelArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByLabelArgs);
