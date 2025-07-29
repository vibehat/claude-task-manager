"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueUpdateToOneWithWhereWithoutSubIssuesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueUpdateWithoutSubIssuesInput_1 = require("../inputs/IssueUpdateWithoutSubIssuesInput");
const IssueWhereInput_1 = require("../inputs/IssueWhereInput");
let IssueUpdateToOneWithWhereWithoutSubIssuesInput = class IssueUpdateToOneWithWhereWithoutSubIssuesInput {
};
exports.IssueUpdateToOneWithWhereWithoutSubIssuesInput = IssueUpdateToOneWithWhereWithoutSubIssuesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueWhereInput_1.IssueWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueWhereInput_1.IssueWhereInput)
], IssueUpdateToOneWithWhereWithoutSubIssuesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueUpdateWithoutSubIssuesInput_1.IssueUpdateWithoutSubIssuesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueUpdateWithoutSubIssuesInput_1.IssueUpdateWithoutSubIssuesInput)
], IssueUpdateToOneWithWhereWithoutSubIssuesInput.prototype, "data", void 0);
exports.IssueUpdateToOneWithWhereWithoutSubIssuesInput = IssueUpdateToOneWithWhereWithoutSubIssuesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueUpdateToOneWithWhereWithoutSubIssuesInput", {})
], IssueUpdateToOneWithWhereWithoutSubIssuesInput);
