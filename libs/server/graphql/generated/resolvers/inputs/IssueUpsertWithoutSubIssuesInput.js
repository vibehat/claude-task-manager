"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueUpsertWithoutSubIssuesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateWithoutSubIssuesInput_1 = require("../inputs/IssueCreateWithoutSubIssuesInput");
const IssueUpdateWithoutSubIssuesInput_1 = require("../inputs/IssueUpdateWithoutSubIssuesInput");
const IssueWhereInput_1 = require("../inputs/IssueWhereInput");
let IssueUpsertWithoutSubIssuesInput = class IssueUpsertWithoutSubIssuesInput {
};
exports.IssueUpsertWithoutSubIssuesInput = IssueUpsertWithoutSubIssuesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueUpdateWithoutSubIssuesInput_1.IssueUpdateWithoutSubIssuesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueUpdateWithoutSubIssuesInput_1.IssueUpdateWithoutSubIssuesInput)
], IssueUpsertWithoutSubIssuesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateWithoutSubIssuesInput_1.IssueCreateWithoutSubIssuesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueCreateWithoutSubIssuesInput_1.IssueCreateWithoutSubIssuesInput)
], IssueUpsertWithoutSubIssuesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueWhereInput_1.IssueWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueWhereInput_1.IssueWhereInput)
], IssueUpsertWithoutSubIssuesInput.prototype, "where", void 0);
exports.IssueUpsertWithoutSubIssuesInput = IssueUpsertWithoutSubIssuesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueUpsertWithoutSubIssuesInput", {})
], IssueUpsertWithoutSubIssuesInput);
