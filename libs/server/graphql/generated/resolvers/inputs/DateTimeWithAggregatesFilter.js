"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateTimeWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedDateTimeFilter_1 = require("../inputs/NestedDateTimeFilter");
const NestedDateTimeWithAggregatesFilter_1 = require("../inputs/NestedDateTimeWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
let DateTimeWithAggregatesFilter = class DateTimeWithAggregatesFilter {
};
exports.DateTimeWithAggregatesFilter = DateTimeWithAggregatesFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], DateTimeWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Date], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DateTimeWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Date], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DateTimeWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], DateTimeWithAggregatesFilter.prototype, "lt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], DateTimeWithAggregatesFilter.prototype, "lte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], DateTimeWithAggregatesFilter.prototype, "gt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], DateTimeWithAggregatesFilter.prototype, "gte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedDateTimeWithAggregatesFilter_1.NestedDateTimeWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedDateTimeWithAggregatesFilter_1.NestedDateTimeWithAggregatesFilter)
], DateTimeWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], DateTimeWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedDateTimeFilter_1.NestedDateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedDateTimeFilter_1.NestedDateTimeFilter)
], DateTimeWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedDateTimeFilter_1.NestedDateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedDateTimeFilter_1.NestedDateTimeFilter)
], DateTimeWithAggregatesFilter.prototype, "_max", void 0);
exports.DateTimeWithAggregatesFilter = DateTimeWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("DateTimeWithAggregatesFilter", {})
], DateTimeWithAggregatesFilter);
