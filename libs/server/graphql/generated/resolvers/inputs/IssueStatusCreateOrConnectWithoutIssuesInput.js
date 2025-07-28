"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueStatusCreateOrConnectWithoutIssuesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueStatusCreateWithoutIssuesInput_1 = require("../inputs/IssueStatusCreateWithoutIssuesInput");
const IssueStatusWhereUniqueInput_1 = require("../inputs/IssueStatusWhereUniqueInput");
let IssueStatusCreateOrConnectWithoutIssuesInput = class IssueStatusCreateOrConnectWithoutIssuesInput {
};
exports.IssueStatusCreateOrConnectWithoutIssuesInput = IssueStatusCreateOrConnectWithoutIssuesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueStatusWhereUniqueInput_1.IssueStatusWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueStatusWhereUniqueInput_1.IssueStatusWhereUniqueInput)
], IssueStatusCreateOrConnectWithoutIssuesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueStatusCreateWithoutIssuesInput_1.IssueStatusCreateWithoutIssuesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueStatusCreateWithoutIssuesInput_1.IssueStatusCreateWithoutIssuesInput)
], IssueStatusCreateOrConnectWithoutIssuesInput.prototype, "create", void 0);
exports.IssueStatusCreateOrConnectWithoutIssuesInput = IssueStatusCreateOrConnectWithoutIssuesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueStatusCreateOrConnectWithoutIssuesInput", {})
], IssueStatusCreateOrConnectWithoutIssuesInput);
