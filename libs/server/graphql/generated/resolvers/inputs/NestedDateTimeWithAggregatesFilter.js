"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedDateTimeWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedDateTimeFilter_1 = require("../inputs/NestedDateTimeFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
let NestedDateTimeWithAggregatesFilter = class NestedDateTimeWithAggregatesFilter {
};
exports.NestedDateTimeWithAggregatesFilter = NestedDateTimeWithAggregatesFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], NestedDateTimeWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Date], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedDateTimeWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Date], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedDateTimeWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], NestedDateTimeWithAggregatesFilter.prototype, "lt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], NestedDateTimeWithAggregatesFilter.prototype, "lte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], NestedDateTimeWithAggregatesFilter.prototype, "gt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], NestedDateTimeWithAggregatesFilter.prototype, "gte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedDateTimeWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedDateTimeWithAggregatesFilter)
], NestedDateTimeWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedDateTimeWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedDateTimeFilter_1.NestedDateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedDateTimeFilter_1.NestedDateTimeFilter)
], NestedDateTimeWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedDateTimeFilter_1.NestedDateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedDateTimeFilter_1.NestedDateTimeFilter)
], NestedDateTimeWithAggregatesFilter.prototype, "_max", void 0);
exports.NestedDateTimeWithAggregatesFilter = NestedDateTimeWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedDateTimeWithAggregatesFilter", {})
], NestedDateTimeWithAggregatesFilter);
