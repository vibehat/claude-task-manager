"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateTimeNullableWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedDateTimeNullableFilter_1 = require("../inputs/NestedDateTimeNullableFilter");
const NestedDateTimeNullableWithAggregatesFilter_1 = require("../inputs/NestedDateTimeNullableWithAggregatesFilter");
const NestedIntNullableFilter_1 = require("../inputs/NestedIntNullableFilter");
let DateTimeNullableWithAggregatesFilter = class DateTimeNullableWithAggregatesFilter {
};
exports.DateTimeNullableWithAggregatesFilter = DateTimeNullableWithAggregatesFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], DateTimeNullableWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Date], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DateTimeNullableWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Date], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DateTimeNullableWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], DateTimeNullableWithAggregatesFilter.prototype, "lt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], DateTimeNullableWithAggregatesFilter.prototype, "lte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], DateTimeNullableWithAggregatesFilter.prototype, "gt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], DateTimeNullableWithAggregatesFilter.prototype, "gte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedDateTimeNullableWithAggregatesFilter_1.NestedDateTimeNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedDateTimeNullableWithAggregatesFilter_1.NestedDateTimeNullableWithAggregatesFilter)
], DateTimeNullableWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntNullableFilter_1.NestedIntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntNullableFilter_1.NestedIntNullableFilter)
], DateTimeNullableWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedDateTimeNullableFilter_1.NestedDateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedDateTimeNullableFilter_1.NestedDateTimeNullableFilter)
], DateTimeNullableWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedDateTimeNullableFilter_1.NestedDateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedDateTimeNullableFilter_1.NestedDateTimeNullableFilter)
], DateTimeNullableWithAggregatesFilter.prototype, "_max", void 0);
exports.DateTimeNullableWithAggregatesFilter = DateTimeNullableWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("DateTimeNullableWithAggregatesFilter", {})
], DateTimeNullableWithAggregatesFilter);
