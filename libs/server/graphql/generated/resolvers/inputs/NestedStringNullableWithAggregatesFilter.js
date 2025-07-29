"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedStringNullableWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedIntNullableFilter_1 = require("../inputs/NestedIntNullableFilter");
const NestedStringNullableFilter_1 = require("../inputs/NestedStringNullableFilter");
let NestedStringNullableWithAggregatesFilter = class NestedStringNullableWithAggregatesFilter {
};
exports.NestedStringNullableWithAggregatesFilter = NestedStringNullableWithAggregatesFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedStringNullableWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedStringNullableWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedStringNullableWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedStringNullableWithAggregatesFilter.prototype, "lt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedStringNullableWithAggregatesFilter.prototype, "lte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedStringNullableWithAggregatesFilter.prototype, "gt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedStringNullableWithAggregatesFilter.prototype, "gte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedStringNullableWithAggregatesFilter.prototype, "contains", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedStringNullableWithAggregatesFilter.prototype, "startsWith", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedStringNullableWithAggregatesFilter.prototype, "endsWith", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedStringNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedStringNullableWithAggregatesFilter)
], NestedStringNullableWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntNullableFilter_1.NestedIntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntNullableFilter_1.NestedIntNullableFilter)
], NestedStringNullableWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedStringNullableFilter_1.NestedStringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedStringNullableFilter_1.NestedStringNullableFilter)
], NestedStringNullableWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedStringNullableFilter_1.NestedStringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedStringNullableFilter_1.NestedStringNullableFilter)
], NestedStringNullableWithAggregatesFilter.prototype, "_max", void 0);
exports.NestedStringNullableWithAggregatesFilter = NestedStringNullableWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedStringNullableWithAggregatesFilter", {})
], NestedStringNullableWithAggregatesFilter);
