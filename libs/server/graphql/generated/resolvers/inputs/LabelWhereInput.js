"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabelWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IssueLabelListRelationFilter_1 = require("../inputs/IssueLabelListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let LabelWhereInput = class LabelWhereInput {
};
exports.LabelWhereInput = LabelWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LabelWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LabelWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LabelWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LabelWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LabelWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LabelWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], LabelWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], LabelWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], LabelWhereInput.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], LabelWhereInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], LabelWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], LabelWhereInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueLabelListRelationFilter_1.IssueLabelListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueLabelListRelationFilter_1.IssueLabelListRelationFilter)
], LabelWhereInput.prototype, "issues", void 0);
exports.LabelWhereInput = LabelWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LabelWhereInput", {})
], LabelWhereInput);
