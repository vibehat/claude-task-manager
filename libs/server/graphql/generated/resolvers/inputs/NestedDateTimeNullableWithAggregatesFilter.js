"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedDateTimeNullableWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedDateTimeNullableFilter_1 = require("../inputs/NestedDateTimeNullableFilter");
const NestedIntNullableFilter_1 = require("../inputs/NestedIntNullableFilter");
let NestedDateTimeNullableWithAggregatesFilter = class NestedDateTimeNullableWithAggregatesFilter {
};
exports.NestedDateTimeNullableWithAggregatesFilter = NestedDateTimeNullableWithAggregatesFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], NestedDateTimeNullableWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Date], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedDateTimeNullableWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Date], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedDateTimeNullableWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], NestedDateTimeNullableWithAggregatesFilter.prototype, "lt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], NestedDateTimeNullableWithAggregatesFilter.prototype, "lte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], NestedDateTimeNullableWithAggregatesFilter.prototype, "gt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], NestedDateTimeNullableWithAggregatesFilter.prototype, "gte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedDateTimeNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedDateTimeNullableWithAggregatesFilter)
], NestedDateTimeNullableWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntNullableFilter_1.NestedIntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntNullableFilter_1.NestedIntNullableFilter)
], NestedDateTimeNullableWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedDateTimeNullableFilter_1.NestedDateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedDateTimeNullableFilter_1.NestedDateTimeNullableFilter)
], NestedDateTimeNullableWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedDateTimeNullableFilter_1.NestedDateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedDateTimeNullableFilter_1.NestedDateTimeNullableFilter)
], NestedDateTimeNullableWithAggregatesFilter.prototype, "_max", void 0);
exports.NestedDateTimeNullableWithAggregatesFilter = NestedDateTimeNullableWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedDateTimeNullableWithAggregatesFilter", {})
], NestedDateTimeNullableWithAggregatesFilter);
