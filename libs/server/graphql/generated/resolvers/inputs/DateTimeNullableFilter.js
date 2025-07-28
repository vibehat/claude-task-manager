"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateTimeNullableFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedDateTimeNullableFilter_1 = require("../inputs/NestedDateTimeNullableFilter");
let DateTimeNullableFilter = class DateTimeNullableFilter {
};
exports.DateTimeNullableFilter = DateTimeNullableFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], DateTimeNullableFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Date], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DateTimeNullableFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Date], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DateTimeNullableFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], DateTimeNullableFilter.prototype, "lt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], DateTimeNullableFilter.prototype, "lte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], DateTimeNullableFilter.prototype, "gt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], DateTimeNullableFilter.prototype, "gte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedDateTimeNullableFilter_1.NestedDateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedDateTimeNullableFilter_1.NestedDateTimeNullableFilter)
], DateTimeNullableFilter.prototype, "not", void 0);
exports.DateTimeNullableFilter = DateTimeNullableFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("DateTimeNullableFilter", {})
], DateTimeNullableFilter);
