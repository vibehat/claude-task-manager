"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueStatusUpsertWithoutIssuesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueStatusCreateWithoutIssuesInput_1 = require("../inputs/IssueStatusCreateWithoutIssuesInput");
const IssueStatusUpdateWithoutIssuesInput_1 = require("../inputs/IssueStatusUpdateWithoutIssuesInput");
const IssueStatusWhereInput_1 = require("../inputs/IssueStatusWhereInput");
let IssueStatusUpsertWithoutIssuesInput = class IssueStatusUpsertWithoutIssuesInput {
};
exports.IssueStatusUpsertWithoutIssuesInput = IssueStatusUpsertWithoutIssuesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueStatusUpdateWithoutIssuesInput_1.IssueStatusUpdateWithoutIssuesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueStatusUpdateWithoutIssuesInput_1.IssueStatusUpdateWithoutIssuesInput)
], IssueStatusUpsertWithoutIssuesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueStatusCreateWithoutIssuesInput_1.IssueStatusCreateWithoutIssuesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueStatusCreateWithoutIssuesInput_1.IssueStatusCreateWithoutIssuesInput)
], IssueStatusUpsertWithoutIssuesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueStatusWhereInput_1.IssueStatusWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueStatusWhereInput_1.IssueStatusWhereInput)
], IssueStatusUpsertWithoutIssuesInput.prototype, "where", void 0);
exports.IssueStatusUpsertWithoutIssuesInput = IssueStatusUpsertWithoutIssuesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueStatusUpsertWithoutIssuesInput", {})
], IssueStatusUpsertWithoutIssuesInput);
