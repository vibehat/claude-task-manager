"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedFloatNullableFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let NestedFloatNullableFilter = class NestedFloatNullableFilter {
};
exports.NestedFloatNullableFilter = NestedFloatNullableFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], NestedFloatNullableFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TypeGraphQL.Float], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedFloatNullableFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TypeGraphQL.Float], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedFloatNullableFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], NestedFloatNullableFilter.prototype, "lt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], NestedFloatNullableFilter.prototype, "lte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], NestedFloatNullableFilter.prototype, "gt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], NestedFloatNullableFilter.prototype, "gte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedFloatNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedFloatNullableFilter)
], NestedFloatNullableFilter.prototype, "not", void 0);
exports.NestedFloatNullableFilter = NestedFloatNullableFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedFloatNullableFilter", {})
], NestedFloatNullableFilter);
