"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueLabelListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueLabelWhereInput_1 = require("../inputs/IssueLabelWhereInput");
let IssueLabelListRelationFilter = class IssueLabelListRelationFilter {
};
exports.IssueLabelListRelationFilter = IssueLabelListRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueLabelWhereInput_1.IssueLabelWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueLabelWhereInput_1.IssueLabelWhereInput)
], IssueLabelListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueLabelWhereInput_1.IssueLabelWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueLabelWhereInput_1.IssueLabelWhereInput)
], IssueLabelListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueLabelWhereInput_1.IssueLabelWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueLabelWhereInput_1.IssueLabelWhereInput)
], IssueLabelListRelationFilter.prototype, "none", void 0);
exports.IssueLabelListRelationFilter = IssueLabelListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueLabelListRelationFilter", {})
], IssueLabelListRelationFilter);
