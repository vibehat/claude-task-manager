"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabelRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LabelWhereInput_1 = require("../inputs/LabelWhereInput");
let LabelRelationFilter = class LabelRelationFilter {
};
exports.LabelRelationFilter = LabelRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LabelWhereInput_1.LabelWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LabelWhereInput_1.LabelWhereInput)
], LabelRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LabelWhereInput_1.LabelWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LabelWhereInput_1.LabelWhereInput)
], LabelRelationFilter.prototype, "isNot", void 0);
exports.LabelRelationFilter = LabelRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("LabelRelationFilter", {})
], LabelRelationFilter);
