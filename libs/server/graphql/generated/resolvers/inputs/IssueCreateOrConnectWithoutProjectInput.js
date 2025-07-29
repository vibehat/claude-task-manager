"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueCreateOrConnectWithoutProjectInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateWithoutProjectInput_1 = require("../inputs/IssueCreateWithoutProjectInput");
const IssueWhereUniqueInput_1 = require("../inputs/IssueWhereUniqueInput");
let IssueCreateOrConnectWithoutProjectInput = class IssueCreateOrConnectWithoutProjectInput {
};
exports.IssueCreateOrConnectWithoutProjectInput = IssueCreateOrConnectWithoutProjectInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueWhereUniqueInput_1.IssueWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueWhereUniqueInput_1.IssueWhereUniqueInput)
], IssueCreateOrConnectWithoutProjectInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateWithoutProjectInput_1.IssueCreateWithoutProjectInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueCreateWithoutProjectInput_1.IssueCreateWithoutProjectInput)
], IssueCreateOrConnectWithoutProjectInput.prototype, "create", void 0);
exports.IssueCreateOrConnectWithoutProjectInput = IssueCreateOrConnectWithoutProjectInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueCreateOrConnectWithoutProjectInput", {})
], IssueCreateOrConnectWithoutProjectInput);
