"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueCreateOrConnectWithoutSubIssuesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateWithoutSubIssuesInput_1 = require("../inputs/IssueCreateWithoutSubIssuesInput");
const IssueWhereUniqueInput_1 = require("../inputs/IssueWhereUniqueInput");
let IssueCreateOrConnectWithoutSubIssuesInput = class IssueCreateOrConnectWithoutSubIssuesInput {
};
exports.IssueCreateOrConnectWithoutSubIssuesInput = IssueCreateOrConnectWithoutSubIssuesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueWhereUniqueInput_1.IssueWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueWhereUniqueInput_1.IssueWhereUniqueInput)
], IssueCreateOrConnectWithoutSubIssuesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateWithoutSubIssuesInput_1.IssueCreateWithoutSubIssuesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueCreateWithoutSubIssuesInput_1.IssueCreateWithoutSubIssuesInput)
], IssueCreateOrConnectWithoutSubIssuesInput.prototype, "create", void 0);
exports.IssueCreateOrConnectWithoutSubIssuesInput = IssueCreateOrConnectWithoutSubIssuesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueCreateOrConnectWithoutSubIssuesInput", {})
], IssueCreateOrConnectWithoutSubIssuesInput);
