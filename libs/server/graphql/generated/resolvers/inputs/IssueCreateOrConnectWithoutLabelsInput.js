"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueCreateOrConnectWithoutLabelsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateWithoutLabelsInput_1 = require("../inputs/IssueCreateWithoutLabelsInput");
const IssueWhereUniqueInput_1 = require("../inputs/IssueWhereUniqueInput");
let IssueCreateOrConnectWithoutLabelsInput = class IssueCreateOrConnectWithoutLabelsInput {
};
exports.IssueCreateOrConnectWithoutLabelsInput = IssueCreateOrConnectWithoutLabelsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueWhereUniqueInput_1.IssueWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueWhereUniqueInput_1.IssueWhereUniqueInput)
], IssueCreateOrConnectWithoutLabelsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateWithoutLabelsInput_1.IssueCreateWithoutLabelsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueCreateWithoutLabelsInput_1.IssueCreateWithoutLabelsInput)
], IssueCreateOrConnectWithoutLabelsInput.prototype, "create", void 0);
exports.IssueCreateOrConnectWithoutLabelsInput = IssueCreateOrConnectWithoutLabelsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueCreateOrConnectWithoutLabelsInput", {})
], IssueCreateOrConnectWithoutLabelsInput);
