"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueCreateOrConnectWithoutIssuePriorityInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateWithoutIssuePriorityInput_1 = require("../inputs/IssueCreateWithoutIssuePriorityInput");
const IssueWhereUniqueInput_1 = require("../inputs/IssueWhereUniqueInput");
let IssueCreateOrConnectWithoutIssuePriorityInput = class IssueCreateOrConnectWithoutIssuePriorityInput {
};
exports.IssueCreateOrConnectWithoutIssuePriorityInput = IssueCreateOrConnectWithoutIssuePriorityInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueWhereUniqueInput_1.IssueWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueWhereUniqueInput_1.IssueWhereUniqueInput)
], IssueCreateOrConnectWithoutIssuePriorityInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateWithoutIssuePriorityInput_1.IssueCreateWithoutIssuePriorityInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueCreateWithoutIssuePriorityInput_1.IssueCreateWithoutIssuePriorityInput)
], IssueCreateOrConnectWithoutIssuePriorityInput.prototype, "create", void 0);
exports.IssueCreateOrConnectWithoutIssuePriorityInput = IssueCreateOrConnectWithoutIssuePriorityInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueCreateOrConnectWithoutIssuePriorityInput", {})
], IssueCreateOrConnectWithoutIssuePriorityInput);
