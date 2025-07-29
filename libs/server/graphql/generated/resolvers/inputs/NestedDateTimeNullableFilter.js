"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedDateTimeNullableFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let NestedDateTimeNullableFilter = class NestedDateTimeNullableFilter {
};
exports.NestedDateTimeNullableFilter = NestedDateTimeNullableFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], NestedDateTimeNullableFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Date], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedDateTimeNullableFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Date], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedDateTimeNullableFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], NestedDateTimeNullableFilter.prototype, "lt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], NestedDateTimeNullableFilter.prototype, "lte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], NestedDateTimeNullableFilter.prototype, "gt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], NestedDateTimeNullableFilter.prototype, "gte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedDateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedDateTimeNullableFilter)
], NestedDateTimeNullableFilter.prototype, "not", void 0);
exports.NestedDateTimeNullableFilter = NestedDateTimeNullableFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedDateTimeNullableFilter", {})
], NestedDateTimeNullableFilter);
