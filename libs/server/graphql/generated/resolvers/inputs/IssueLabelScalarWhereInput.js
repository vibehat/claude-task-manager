"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueLabelScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringFilter_1 = require("../inputs/StringFilter");
let IssueLabelScalarWhereInput = class IssueLabelScalarWhereInput {
};
exports.IssueLabelScalarWhereInput = IssueLabelScalarWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueLabelScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueLabelScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueLabelScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueLabelScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueLabelScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueLabelScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], IssueLabelScalarWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], IssueLabelScalarWhereInput.prototype, "issueId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], IssueLabelScalarWhereInput.prototype, "labelId", void 0);
exports.IssueLabelScalarWhereInput = IssueLabelScalarWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueLabelScalarWhereInput", {})
], IssueLabelScalarWhereInput);
