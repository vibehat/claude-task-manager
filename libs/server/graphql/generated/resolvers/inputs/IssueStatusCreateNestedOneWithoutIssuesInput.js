"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueStatusCreateNestedOneWithoutIssuesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueStatusCreateOrConnectWithoutIssuesInput_1 = require("../inputs/IssueStatusCreateOrConnectWithoutIssuesInput");
const IssueStatusCreateWithoutIssuesInput_1 = require("../inputs/IssueStatusCreateWithoutIssuesInput");
const IssueStatusWhereUniqueInput_1 = require("../inputs/IssueStatusWhereUniqueInput");
let IssueStatusCreateNestedOneWithoutIssuesInput = class IssueStatusCreateNestedOneWithoutIssuesInput {
};
exports.IssueStatusCreateNestedOneWithoutIssuesInput = IssueStatusCreateNestedOneWithoutIssuesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueStatusCreateWithoutIssuesInput_1.IssueStatusCreateWithoutIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueStatusCreateWithoutIssuesInput_1.IssueStatusCreateWithoutIssuesInput)
], IssueStatusCreateNestedOneWithoutIssuesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueStatusCreateOrConnectWithoutIssuesInput_1.IssueStatusCreateOrConnectWithoutIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueStatusCreateOrConnectWithoutIssuesInput_1.IssueStatusCreateOrConnectWithoutIssuesInput)
], IssueStatusCreateNestedOneWithoutIssuesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueStatusWhereUniqueInput_1.IssueStatusWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueStatusWhereUniqueInput_1.IssueStatusWhereUniqueInput)
], IssueStatusCreateNestedOneWithoutIssuesInput.prototype, "connect", void 0);
exports.IssueStatusCreateNestedOneWithoutIssuesInput = IssueStatusCreateNestedOneWithoutIssuesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueStatusCreateNestedOneWithoutIssuesInput", {})
], IssueStatusCreateNestedOneWithoutIssuesInput);
