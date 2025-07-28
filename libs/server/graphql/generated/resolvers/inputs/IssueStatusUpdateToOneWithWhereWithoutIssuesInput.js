"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueStatusUpdateToOneWithWhereWithoutIssuesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueStatusUpdateWithoutIssuesInput_1 = require("../inputs/IssueStatusUpdateWithoutIssuesInput");
const IssueStatusWhereInput_1 = require("../inputs/IssueStatusWhereInput");
let IssueStatusUpdateToOneWithWhereWithoutIssuesInput = class IssueStatusUpdateToOneWithWhereWithoutIssuesInput {
};
exports.IssueStatusUpdateToOneWithWhereWithoutIssuesInput = IssueStatusUpdateToOneWithWhereWithoutIssuesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueStatusWhereInput_1.IssueStatusWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueStatusWhereInput_1.IssueStatusWhereInput)
], IssueStatusUpdateToOneWithWhereWithoutIssuesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueStatusUpdateWithoutIssuesInput_1.IssueStatusUpdateWithoutIssuesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueStatusUpdateWithoutIssuesInput_1.IssueStatusUpdateWithoutIssuesInput)
], IssueStatusUpdateToOneWithWhereWithoutIssuesInput.prototype, "data", void 0);
exports.IssueStatusUpdateToOneWithWhereWithoutIssuesInput = IssueStatusUpdateToOneWithWhereWithoutIssuesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueStatusUpdateToOneWithWhereWithoutIssuesInput", {})
], IssueStatusUpdateToOneWithWhereWithoutIssuesInput);
