"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueCreateOrConnectWithoutIssueStatusInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateWithoutIssueStatusInput_1 = require("../inputs/IssueCreateWithoutIssueStatusInput");
const IssueWhereUniqueInput_1 = require("../inputs/IssueWhereUniqueInput");
let IssueCreateOrConnectWithoutIssueStatusInput = class IssueCreateOrConnectWithoutIssueStatusInput {
};
exports.IssueCreateOrConnectWithoutIssueStatusInput = IssueCreateOrConnectWithoutIssueStatusInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueWhereUniqueInput_1.IssueWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueWhereUniqueInput_1.IssueWhereUniqueInput)
], IssueCreateOrConnectWithoutIssueStatusInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateWithoutIssueStatusInput_1.IssueCreateWithoutIssueStatusInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueCreateWithoutIssueStatusInput_1.IssueCreateWithoutIssueStatusInput)
], IssueCreateOrConnectWithoutIssueStatusInput.prototype, "create", void 0);
exports.IssueCreateOrConnectWithoutIssueStatusInput = IssueCreateOrConnectWithoutIssueStatusInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueCreateOrConnectWithoutIssueStatusInput", {})
], IssueCreateOrConnectWithoutIssueStatusInput);
