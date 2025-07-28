"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueLabelWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueRelationFilter_1 = require("../inputs/IssueRelationFilter");
const LabelRelationFilter_1 = require("../inputs/LabelRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let IssueLabelWhereInput = class IssueLabelWhereInput {
};
exports.IssueLabelWhereInput = IssueLabelWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueLabelWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueLabelWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueLabelWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueLabelWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueLabelWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueLabelWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], IssueLabelWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], IssueLabelWhereInput.prototype, "issueId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], IssueLabelWhereInput.prototype, "labelId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueRelationFilter_1.IssueRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueRelationFilter_1.IssueRelationFilter)
], IssueLabelWhereInput.prototype, "issue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LabelRelationFilter_1.LabelRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LabelRelationFilter_1.LabelRelationFilter)
], IssueLabelWhereInput.prototype, "label", void 0);
exports.IssueLabelWhereInput = IssueLabelWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueLabelWhereInput", {})
], IssueLabelWhereInput);
