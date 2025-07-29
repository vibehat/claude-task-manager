"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueLabelUpdateWithoutIssueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LabelUpdateOneRequiredWithoutIssuesNestedInput_1 = require("../inputs/LabelUpdateOneRequiredWithoutIssuesNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let IssueLabelUpdateWithoutIssueInput = class IssueLabelUpdateWithoutIssueInput {
};
exports.IssueLabelUpdateWithoutIssueInput = IssueLabelUpdateWithoutIssueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], IssueLabelUpdateWithoutIssueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LabelUpdateOneRequiredWithoutIssuesNestedInput_1.LabelUpdateOneRequiredWithoutIssuesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LabelUpdateOneRequiredWithoutIssuesNestedInput_1.LabelUpdateOneRequiredWithoutIssuesNestedInput)
], IssueLabelUpdateWithoutIssueInput.prototype, "label", void 0);
exports.IssueLabelUpdateWithoutIssueInput = IssueLabelUpdateWithoutIssueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueLabelUpdateWithoutIssueInput", {})
], IssueLabelUpdateWithoutIssueInput);
