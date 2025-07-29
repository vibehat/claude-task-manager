"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssuePriorityCreateNestedOneWithoutIssuesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssuePriorityCreateOrConnectWithoutIssuesInput_1 = require("../inputs/IssuePriorityCreateOrConnectWithoutIssuesInput");
const IssuePriorityCreateWithoutIssuesInput_1 = require("../inputs/IssuePriorityCreateWithoutIssuesInput");
const IssuePriorityWhereUniqueInput_1 = require("../inputs/IssuePriorityWhereUniqueInput");
let IssuePriorityCreateNestedOneWithoutIssuesInput = class IssuePriorityCreateNestedOneWithoutIssuesInput {
};
exports.IssuePriorityCreateNestedOneWithoutIssuesInput = IssuePriorityCreateNestedOneWithoutIssuesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssuePriorityCreateWithoutIssuesInput_1.IssuePriorityCreateWithoutIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssuePriorityCreateWithoutIssuesInput_1.IssuePriorityCreateWithoutIssuesInput)
], IssuePriorityCreateNestedOneWithoutIssuesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssuePriorityCreateOrConnectWithoutIssuesInput_1.IssuePriorityCreateOrConnectWithoutIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssuePriorityCreateOrConnectWithoutIssuesInput_1.IssuePriorityCreateOrConnectWithoutIssuesInput)
], IssuePriorityCreateNestedOneWithoutIssuesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssuePriorityWhereUniqueInput_1.IssuePriorityWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssuePriorityWhereUniqueInput_1.IssuePriorityWhereUniqueInput)
], IssuePriorityCreateNestedOneWithoutIssuesInput.prototype, "connect", void 0);
exports.IssuePriorityCreateNestedOneWithoutIssuesInput = IssuePriorityCreateNestedOneWithoutIssuesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssuePriorityCreateNestedOneWithoutIssuesInput", {})
], IssuePriorityCreateNestedOneWithoutIssuesInput);
