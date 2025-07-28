"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueCreateOrConnectWithoutCycleInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateWithoutCycleInput_1 = require("../inputs/IssueCreateWithoutCycleInput");
const IssueWhereUniqueInput_1 = require("../inputs/IssueWhereUniqueInput");
let IssueCreateOrConnectWithoutCycleInput = class IssueCreateOrConnectWithoutCycleInput {
};
exports.IssueCreateOrConnectWithoutCycleInput = IssueCreateOrConnectWithoutCycleInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueWhereUniqueInput_1.IssueWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueWhereUniqueInput_1.IssueWhereUniqueInput)
], IssueCreateOrConnectWithoutCycleInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateWithoutCycleInput_1.IssueCreateWithoutCycleInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueCreateWithoutCycleInput_1.IssueCreateWithoutCycleInput)
], IssueCreateOrConnectWithoutCycleInput.prototype, "create", void 0);
exports.IssueCreateOrConnectWithoutCycleInput = IssueCreateOrConnectWithoutCycleInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueCreateOrConnectWithoutCycleInput", {})
], IssueCreateOrConnectWithoutCycleInput);
