"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssuePriorityCreateOrConnectWithoutIssuesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssuePriorityCreateWithoutIssuesInput_1 = require("../inputs/IssuePriorityCreateWithoutIssuesInput");
const IssuePriorityWhereUniqueInput_1 = require("../inputs/IssuePriorityWhereUniqueInput");
let IssuePriorityCreateOrConnectWithoutIssuesInput = class IssuePriorityCreateOrConnectWithoutIssuesInput {
};
exports.IssuePriorityCreateOrConnectWithoutIssuesInput = IssuePriorityCreateOrConnectWithoutIssuesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssuePriorityWhereUniqueInput_1.IssuePriorityWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssuePriorityWhereUniqueInput_1.IssuePriorityWhereUniqueInput)
], IssuePriorityCreateOrConnectWithoutIssuesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssuePriorityCreateWithoutIssuesInput_1.IssuePriorityCreateWithoutIssuesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssuePriorityCreateWithoutIssuesInput_1.IssuePriorityCreateWithoutIssuesInput)
], IssuePriorityCreateOrConnectWithoutIssuesInput.prototype, "create", void 0);
exports.IssuePriorityCreateOrConnectWithoutIssuesInput = IssuePriorityCreateOrConnectWithoutIssuesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssuePriorityCreateOrConnectWithoutIssuesInput", {})
], IssuePriorityCreateOrConnectWithoutIssuesInput);
