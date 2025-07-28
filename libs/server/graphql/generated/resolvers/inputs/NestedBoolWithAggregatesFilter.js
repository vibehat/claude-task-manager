"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedBoolWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedBoolFilter_1 = require("../inputs/NestedBoolFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
let NestedBoolWithAggregatesFilter = class NestedBoolWithAggregatesFilter {
};
exports.NestedBoolWithAggregatesFilter = NestedBoolWithAggregatesFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], NestedBoolWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedBoolWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedBoolWithAggregatesFilter)
], NestedBoolWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedBoolWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedBoolFilter_1.NestedBoolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedBoolFilter_1.NestedBoolFilter)
], NestedBoolWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedBoolFilter_1.NestedBoolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedBoolFilter_1.NestedBoolFilter)
], NestedBoolWithAggregatesFilter.prototype, "_max", void 0);
exports.NestedBoolWithAggregatesFilter = NestedBoolWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedBoolWithAggregatesFilter", {})
], NestedBoolWithAggregatesFilter);
