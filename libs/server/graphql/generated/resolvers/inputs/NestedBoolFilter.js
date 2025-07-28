"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedBoolFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let NestedBoolFilter = class NestedBoolFilter {
};
exports.NestedBoolFilter = NestedBoolFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], NestedBoolFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedBoolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedBoolFilter)
], NestedBoolFilter.prototype, "not", void 0);
exports.NestedBoolFilter = NestedBoolFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedBoolFilter", {})
], NestedBoolFilter);
