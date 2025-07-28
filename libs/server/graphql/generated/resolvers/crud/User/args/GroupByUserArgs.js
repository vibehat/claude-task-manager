"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByUserArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserOrderByWithAggregationInput_1 = require("../../../inputs/UserOrderByWithAggregationInput");
const UserScalarWhereWithAggregatesInput_1 = require("../../../inputs/UserScalarWhereWithAggregatesInput");
const UserWhereInput_1 = require("../../../inputs/UserWhereInput");
const UserScalarFieldEnum_1 = require("../../../../enums/UserScalarFieldEnum");
let GroupByUserArgs = class GroupByUserArgs {
};
exports.GroupByUserArgs = GroupByUserArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], GroupByUserArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserOrderByWithAggregationInput_1.UserOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByUserArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserScalarFieldEnum_1.UserScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByUserArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserScalarWhereWithAggregatesInput_1.UserScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserScalarWhereWithAggregatesInput_1.UserScalarWhereWithAggregatesInput)
], GroupByUserArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByUserArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByUserArgs.prototype, "skip", void 0);
exports.GroupByUserArgs = GroupByUserArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByUserArgs);
