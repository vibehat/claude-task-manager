"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueLabelIssueIdLabelIdCompoundUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let IssueLabelIssueIdLabelIdCompoundUniqueInput = class IssueLabelIssueIdLabelIdCompoundUniqueInput {
};
exports.IssueLabelIssueIdLabelIdCompoundUniqueInput = IssueLabelIssueIdLabelIdCompoundUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IssueLabelIssueIdLabelIdCompoundUniqueInput.prototype, "issueId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IssueLabelIssueIdLabelIdCompoundUniqueInput.prototype, "labelId", void 0);
exports.IssueLabelIssueIdLabelIdCompoundUniqueInput = IssueLabelIssueIdLabelIdCompoundUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueLabelIssueIdLabelIdCompoundUniqueInput", {})
], IssueLabelIssueIdLabelIdCompoundUniqueInput);
