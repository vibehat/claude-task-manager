"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueLabelCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateNestedOneWithoutLabelsInput_1 = require("../inputs/IssueCreateNestedOneWithoutLabelsInput");
const LabelCreateNestedOneWithoutIssuesInput_1 = require("../inputs/LabelCreateNestedOneWithoutIssuesInput");
let IssueLabelCreateInput = class IssueLabelCreateInput {
};
exports.IssueLabelCreateInput = IssueLabelCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueLabelCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateNestedOneWithoutLabelsInput_1.IssueCreateNestedOneWithoutLabelsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueCreateNestedOneWithoutLabelsInput_1.IssueCreateNestedOneWithoutLabelsInput)
], IssueLabelCreateInput.prototype, "issue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LabelCreateNestedOneWithoutIssuesInput_1.LabelCreateNestedOneWithoutIssuesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LabelCreateNestedOneWithoutIssuesInput_1.LabelCreateNestedOneWithoutIssuesInput)
], IssueLabelCreateInput.prototype, "label", void 0);
exports.IssueLabelCreateInput = IssueLabelCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueLabelCreateInput", {})
], IssueLabelCreateInput);
