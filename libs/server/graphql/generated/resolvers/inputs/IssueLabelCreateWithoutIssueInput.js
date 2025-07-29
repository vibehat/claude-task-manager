"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueLabelCreateWithoutIssueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LabelCreateNestedOneWithoutIssuesInput_1 = require("../inputs/LabelCreateNestedOneWithoutIssuesInput");
let IssueLabelCreateWithoutIssueInput = class IssueLabelCreateWithoutIssueInput {
};
exports.IssueLabelCreateWithoutIssueInput = IssueLabelCreateWithoutIssueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueLabelCreateWithoutIssueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LabelCreateNestedOneWithoutIssuesInput_1.LabelCreateNestedOneWithoutIssuesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LabelCreateNestedOneWithoutIssuesInput_1.LabelCreateNestedOneWithoutIssuesInput)
], IssueLabelCreateWithoutIssueInput.prototype, "label", void 0);
exports.IssueLabelCreateWithoutIssueInput = IssueLabelCreateWithoutIssueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueLabelCreateWithoutIssueInput", {})
], IssueLabelCreateWithoutIssueInput);
