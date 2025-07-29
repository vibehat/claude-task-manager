"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabelWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IssueLabelListRelationFilter_1 = require("../inputs/IssueLabelListRelationFilter");
const LabelWhereInput_1 = require("../inputs/LabelWhereInput");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let LabelWhereUniqueInput = class LabelWhereUniqueInput {
};
exports.LabelWhereUniqueInput = LabelWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LabelWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LabelWhereInput_1.LabelWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LabelWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LabelWhereInput_1.LabelWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LabelWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LabelWhereInput_1.LabelWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LabelWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], LabelWhereUniqueInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], LabelWhereUniqueInput.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], LabelWhereUniqueInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], LabelWhereUniqueInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], LabelWhereUniqueInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueLabelListRelationFilter_1.IssueLabelListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueLabelListRelationFilter_1.IssueLabelListRelationFilter)
], LabelWhereUniqueInput.prototype, "issues", void 0);
exports.LabelWhereUniqueInput = LabelWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LabelWhereUniqueInput", {})
], LabelWhereUniqueInput);
