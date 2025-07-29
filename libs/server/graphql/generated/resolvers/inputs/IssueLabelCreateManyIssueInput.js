"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueLabelCreateManyIssueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let IssueLabelCreateManyIssueInput = class IssueLabelCreateManyIssueInput {
};
exports.IssueLabelCreateManyIssueInput = IssueLabelCreateManyIssueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueLabelCreateManyIssueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IssueLabelCreateManyIssueInput.prototype, "labelId", void 0);
exports.IssueLabelCreateManyIssueInput = IssueLabelCreateManyIssueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueLabelCreateManyIssueInput", {})
], IssueLabelCreateManyIssueInput);
