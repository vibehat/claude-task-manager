"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByCycleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CycleOrderByWithAggregationInput_1 = require("../../../inputs/CycleOrderByWithAggregationInput");
const CycleScalarWhereWithAggregatesInput_1 = require("../../../inputs/CycleScalarWhereWithAggregatesInput");
const CycleWhereInput_1 = require("../../../inputs/CycleWhereInput");
const CycleScalarFieldEnum_1 = require("../../../../enums/CycleScalarFieldEnum");
let GroupByCycleArgs = class GroupByCycleArgs {
};
exports.GroupByCycleArgs = GroupByCycleArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleWhereInput_1.CycleWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CycleWhereInput_1.CycleWhereInput)
], GroupByCycleArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CycleOrderByWithAggregationInput_1.CycleOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCycleArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CycleScalarFieldEnum_1.CycleScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCycleArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleScalarWhereWithAggregatesInput_1.CycleScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CycleScalarWhereWithAggregatesInput_1.CycleScalarWhereWithAggregatesInput)
], GroupByCycleArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCycleArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCycleArgs.prototype, "skip", void 0);
exports.GroupByCycleArgs = GroupByCycleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByCycleArgs);
