"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CycleNullableRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CycleWhereInput_1 = require("../inputs/CycleWhereInput");
let CycleNullableRelationFilter = class CycleNullableRelationFilter {
};
exports.CycleNullableRelationFilter = CycleNullableRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleWhereInput_1.CycleWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CycleWhereInput_1.CycleWhereInput)
], CycleNullableRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleWhereInput_1.CycleWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CycleWhereInput_1.CycleWhereInput)
], CycleNullableRelationFilter.prototype, "isNot", void 0);
exports.CycleNullableRelationFilter = CycleNullableRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("CycleNullableRelationFilter", {})
], CycleNullableRelationFilter);
