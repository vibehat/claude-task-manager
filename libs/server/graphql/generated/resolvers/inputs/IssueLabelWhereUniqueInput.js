"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueLabelWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueLabelIssueIdLabelIdCompoundUniqueInput_1 = require("../inputs/IssueLabelIssueIdLabelIdCompoundUniqueInput");
const IssueLabelWhereInput_1 = require("../inputs/IssueLabelWhereInput");
const IssueRelationFilter_1 = require("../inputs/IssueRelationFilter");
const LabelRelationFilter_1 = require("../inputs/LabelRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let IssueLabelWhereUniqueInput = class IssueLabelWhereUniqueInput {
};
exports.IssueLabelWhereUniqueInput = IssueLabelWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueLabelWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueLabelIssueIdLabelIdCompoundUniqueInput_1.IssueLabelIssueIdLabelIdCompoundUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueLabelIssueIdLabelIdCompoundUniqueInput_1.IssueLabelIssueIdLabelIdCompoundUniqueInput)
], IssueLabelWhereUniqueInput.prototype, "issueId_labelId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueLabelWhereInput_1.IssueLabelWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueLabelWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueLabelWhereInput_1.IssueLabelWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueLabelWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueLabelWhereInput_1.IssueLabelWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueLabelWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], IssueLabelWhereUniqueInput.prototype, "issueId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], IssueLabelWhereUniqueInput.prototype, "labelId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueRelationFilter_1.IssueRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueRelationFilter_1.IssueRelationFilter)
], IssueLabelWhereUniqueInput.prototype, "issue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LabelRelationFilter_1.LabelRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LabelRelationFilter_1.LabelRelationFilter)
], IssueLabelWhereUniqueInput.prototype, "label", void 0);
exports.IssueLabelWhereUniqueInput = IssueLabelWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueLabelWhereUniqueInput", {})
], IssueLabelWhereUniqueInput);
