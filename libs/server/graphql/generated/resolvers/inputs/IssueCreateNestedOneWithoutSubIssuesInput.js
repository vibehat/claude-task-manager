"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueCreateNestedOneWithoutSubIssuesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateOrConnectWithoutSubIssuesInput_1 = require("../inputs/IssueCreateOrConnectWithoutSubIssuesInput");
const IssueCreateWithoutSubIssuesInput_1 = require("../inputs/IssueCreateWithoutSubIssuesInput");
const IssueWhereUniqueInput_1 = require("../inputs/IssueWhereUniqueInput");
let IssueCreateNestedOneWithoutSubIssuesInput = class IssueCreateNestedOneWithoutSubIssuesInput {
};
exports.IssueCreateNestedOneWithoutSubIssuesInput = IssueCreateNestedOneWithoutSubIssuesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateWithoutSubIssuesInput_1.IssueCreateWithoutSubIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueCreateWithoutSubIssuesInput_1.IssueCreateWithoutSubIssuesInput)
], IssueCreateNestedOneWithoutSubIssuesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateOrConnectWithoutSubIssuesInput_1.IssueCreateOrConnectWithoutSubIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueCreateOrConnectWithoutSubIssuesInput_1.IssueCreateOrConnectWithoutSubIssuesInput)
], IssueCreateNestedOneWithoutSubIssuesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueWhereUniqueInput_1.IssueWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueWhereUniqueInput_1.IssueWhereUniqueInput)
], IssueCreateNestedOneWithoutSubIssuesInput.prototype, "connect", void 0);
exports.IssueCreateNestedOneWithoutSubIssuesInput = IssueCreateNestedOneWithoutSubIssuesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueCreateNestedOneWithoutSubIssuesInput", {})
], IssueCreateNestedOneWithoutSubIssuesInput);
