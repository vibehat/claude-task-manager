"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueCreateOrConnectWithoutAssigneeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateWithoutAssigneeInput_1 = require("../inputs/IssueCreateWithoutAssigneeInput");
const IssueWhereUniqueInput_1 = require("../inputs/IssueWhereUniqueInput");
let IssueCreateOrConnectWithoutAssigneeInput = class IssueCreateOrConnectWithoutAssigneeInput {
};
exports.IssueCreateOrConnectWithoutAssigneeInput = IssueCreateOrConnectWithoutAssigneeInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueWhereUniqueInput_1.IssueWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueWhereUniqueInput_1.IssueWhereUniqueInput)
], IssueCreateOrConnectWithoutAssigneeInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateWithoutAssigneeInput_1.IssueCreateWithoutAssigneeInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueCreateWithoutAssigneeInput_1.IssueCreateWithoutAssigneeInput)
], IssueCreateOrConnectWithoutAssigneeInput.prototype, "create", void 0);
exports.IssueCreateOrConnectWithoutAssigneeInput = IssueCreateOrConnectWithoutAssigneeInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueCreateOrConnectWithoutAssigneeInput", {})
], IssueCreateOrConnectWithoutAssigneeInput);
