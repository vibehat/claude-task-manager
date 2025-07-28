"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueLabelOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueOrderByWithRelationInput_1 = require("../inputs/IssueOrderByWithRelationInput");
const LabelOrderByWithRelationInput_1 = require("../inputs/LabelOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let IssueLabelOrderByWithRelationInput = class IssueLabelOrderByWithRelationInput {
};
exports.IssueLabelOrderByWithRelationInput = IssueLabelOrderByWithRelationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueLabelOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueLabelOrderByWithRelationInput.prototype, "issueId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueLabelOrderByWithRelationInput.prototype, "labelId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueOrderByWithRelationInput_1.IssueOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueOrderByWithRelationInput_1.IssueOrderByWithRelationInput)
], IssueLabelOrderByWithRelationInput.prototype, "issue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LabelOrderByWithRelationInput_1.LabelOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LabelOrderByWithRelationInput_1.LabelOrderByWithRelationInput)
], IssueLabelOrderByWithRelationInput.prototype, "label", void 0);
exports.IssueLabelOrderByWithRelationInput = IssueLabelOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueLabelOrderByWithRelationInput", {})
], IssueLabelOrderByWithRelationInput);
