"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueLabelCreateWithoutLabelInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateNestedOneWithoutLabelsInput_1 = require("../inputs/IssueCreateNestedOneWithoutLabelsInput");
let IssueLabelCreateWithoutLabelInput = class IssueLabelCreateWithoutLabelInput {
};
exports.IssueLabelCreateWithoutLabelInput = IssueLabelCreateWithoutLabelInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueLabelCreateWithoutLabelInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateNestedOneWithoutLabelsInput_1.IssueCreateNestedOneWithoutLabelsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueCreateNestedOneWithoutLabelsInput_1.IssueCreateNestedOneWithoutLabelsInput)
], IssueLabelCreateWithoutLabelInput.prototype, "issue", void 0);
exports.IssueLabelCreateWithoutLabelInput = IssueLabelCreateWithoutLabelInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueLabelCreateWithoutLabelInput", {})
], IssueLabelCreateWithoutLabelInput);
