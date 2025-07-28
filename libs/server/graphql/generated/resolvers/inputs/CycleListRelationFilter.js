"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CycleListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CycleWhereInput_1 = require("../inputs/CycleWhereInput");
let CycleListRelationFilter = class CycleListRelationFilter {
};
exports.CycleListRelationFilter = CycleListRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleWhereInput_1.CycleWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CycleWhereInput_1.CycleWhereInput)
], CycleListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleWhereInput_1.CycleWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CycleWhereInput_1.CycleWhereInput)
], CycleListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleWhereInput_1.CycleWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CycleWhereInput_1.CycleWhereInput)
], CycleListRelationFilter.prototype, "none", void 0);
exports.CycleListRelationFilter = CycleListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("CycleListRelationFilter", {})
], CycleListRelationFilter);
