"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueCreateOrConnectWithoutParentIssueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateWithoutParentIssueInput_1 = require("../inputs/IssueCreateWithoutParentIssueInput");
const IssueWhereUniqueInput_1 = require("../inputs/IssueWhereUniqueInput");
let IssueCreateOrConnectWithoutParentIssueInput = class IssueCreateOrConnectWithoutParentIssueInput {
};
exports.IssueCreateOrConnectWithoutParentIssueInput = IssueCreateOrConnectWithoutParentIssueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueWhereUniqueInput_1.IssueWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueWhereUniqueInput_1.IssueWhereUniqueInput)
], IssueCreateOrConnectWithoutParentIssueInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateWithoutParentIssueInput_1.IssueCreateWithoutParentIssueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueCreateWithoutParentIssueInput_1.IssueCreateWithoutParentIssueInput)
], IssueCreateOrConnectWithoutParentIssueInput.prototype, "create", void 0);
exports.IssueCreateOrConnectWithoutParentIssueInput = IssueCreateOrConnectWithoutParentIssueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueCreateOrConnectWithoutParentIssueInput", {})
], IssueCreateOrConnectWithoutParentIssueInput);
