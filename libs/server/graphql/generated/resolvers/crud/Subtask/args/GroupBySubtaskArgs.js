"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupBySubtaskArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubtaskOrderByWithAggregationInput_1 = require("../../../inputs/SubtaskOrderByWithAggregationInput");
const SubtaskScalarWhereWithAggregatesInput_1 = require("../../../inputs/SubtaskScalarWhereWithAggregatesInput");
const SubtaskWhereInput_1 = require("../../../inputs/SubtaskWhereInput");
const SubtaskScalarFieldEnum_1 = require("../../../../enums/SubtaskScalarFieldEnum");
let GroupBySubtaskArgs = class GroupBySubtaskArgs {
};
exports.GroupBySubtaskArgs = GroupBySubtaskArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskWhereInput_1.SubtaskWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubtaskWhereInput_1.SubtaskWhereInput)
], GroupBySubtaskArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubtaskOrderByWithAggregationInput_1.SubtaskOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupBySubtaskArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubtaskScalarFieldEnum_1.SubtaskScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupBySubtaskArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskScalarWhereWithAggregatesInput_1.SubtaskScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubtaskScalarWhereWithAggregatesInput_1.SubtaskScalarWhereWithAggregatesInput)
], GroupBySubtaskArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupBySubtaskArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupBySubtaskArgs.prototype, "skip", void 0);
exports.GroupBySubtaskArgs = GroupBySubtaskArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupBySubtaskArgs);
