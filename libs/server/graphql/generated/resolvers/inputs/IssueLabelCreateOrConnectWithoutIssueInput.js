"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueLabelCreateOrConnectWithoutIssueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueLabelCreateWithoutIssueInput_1 = require("../inputs/IssueLabelCreateWithoutIssueInput");
const IssueLabelWhereUniqueInput_1 = require("../inputs/IssueLabelWhereUniqueInput");
let IssueLabelCreateOrConnectWithoutIssueInput = class IssueLabelCreateOrConnectWithoutIssueInput {
};
exports.IssueLabelCreateOrConnectWithoutIssueInput = IssueLabelCreateOrConnectWithoutIssueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueLabelWhereUniqueInput_1.IssueLabelWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueLabelWhereUniqueInput_1.IssueLabelWhereUniqueInput)
], IssueLabelCreateOrConnectWithoutIssueInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueLabelCreateWithoutIssueInput_1.IssueLabelCreateWithoutIssueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueLabelCreateWithoutIssueInput_1.IssueLabelCreateWithoutIssueInput)
], IssueLabelCreateOrConnectWithoutIssueInput.prototype, "create", void 0);
exports.IssueLabelCreateOrConnectWithoutIssueInput = IssueLabelCreateOrConnectWithoutIssueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueLabelCreateOrConnectWithoutIssueInput", {})
], IssueLabelCreateOrConnectWithoutIssueInput);
