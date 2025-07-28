"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueLabelUpdateWithoutLabelInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueUpdateOneRequiredWithoutLabelsNestedInput_1 = require("../inputs/IssueUpdateOneRequiredWithoutLabelsNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let IssueLabelUpdateWithoutLabelInput = class IssueLabelUpdateWithoutLabelInput {
};
exports.IssueLabelUpdateWithoutLabelInput = IssueLabelUpdateWithoutLabelInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], IssueLabelUpdateWithoutLabelInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueUpdateOneRequiredWithoutLabelsNestedInput_1.IssueUpdateOneRequiredWithoutLabelsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueUpdateOneRequiredWithoutLabelsNestedInput_1.IssueUpdateOneRequiredWithoutLabelsNestedInput)
], IssueLabelUpdateWithoutLabelInput.prototype, "issue", void 0);
exports.IssueLabelUpdateWithoutLabelInput = IssueLabelUpdateWithoutLabelInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueLabelUpdateWithoutLabelInput", {})
], IssueLabelUpdateWithoutLabelInput);
