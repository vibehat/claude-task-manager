"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueLabelUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueUpdateOneRequiredWithoutLabelsNestedInput_1 = require("../inputs/IssueUpdateOneRequiredWithoutLabelsNestedInput");
const LabelUpdateOneRequiredWithoutIssuesNestedInput_1 = require("../inputs/LabelUpdateOneRequiredWithoutIssuesNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let IssueLabelUpdateInput = class IssueLabelUpdateInput {
};
exports.IssueLabelUpdateInput = IssueLabelUpdateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], IssueLabelUpdateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueUpdateOneRequiredWithoutLabelsNestedInput_1.IssueUpdateOneRequiredWithoutLabelsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueUpdateOneRequiredWithoutLabelsNestedInput_1.IssueUpdateOneRequiredWithoutLabelsNestedInput)
], IssueLabelUpdateInput.prototype, "issue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LabelUpdateOneRequiredWithoutIssuesNestedInput_1.LabelUpdateOneRequiredWithoutIssuesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LabelUpdateOneRequiredWithoutIssuesNestedInput_1.LabelUpdateOneRequiredWithoutIssuesNestedInput)
], IssueLabelUpdateInput.prototype, "label", void 0);
exports.IssueLabelUpdateInput = IssueLabelUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueLabelUpdateInput", {})
], IssueLabelUpdateInput);
