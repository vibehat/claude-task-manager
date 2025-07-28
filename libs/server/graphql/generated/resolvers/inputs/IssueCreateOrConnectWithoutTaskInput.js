"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueCreateOrConnectWithoutTaskInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateWithoutTaskInput_1 = require("../inputs/IssueCreateWithoutTaskInput");
const IssueWhereUniqueInput_1 = require("../inputs/IssueWhereUniqueInput");
let IssueCreateOrConnectWithoutTaskInput = class IssueCreateOrConnectWithoutTaskInput {
};
exports.IssueCreateOrConnectWithoutTaskInput = IssueCreateOrConnectWithoutTaskInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueWhereUniqueInput_1.IssueWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueWhereUniqueInput_1.IssueWhereUniqueInput)
], IssueCreateOrConnectWithoutTaskInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateWithoutTaskInput_1.IssueCreateWithoutTaskInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueCreateWithoutTaskInput_1.IssueCreateWithoutTaskInput)
], IssueCreateOrConnectWithoutTaskInput.prototype, "create", void 0);
exports.IssueCreateOrConnectWithoutTaskInput = IssueCreateOrConnectWithoutTaskInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueCreateOrConnectWithoutTaskInput", {})
], IssueCreateOrConnectWithoutTaskInput);
