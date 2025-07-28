"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutAssignedIssuesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutAssignedIssuesInput_1 = require("../inputs/UserCreateWithoutAssignedIssuesInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutAssignedIssuesInput = class UserCreateOrConnectWithoutAssignedIssuesInput {
};
exports.UserCreateOrConnectWithoutAssignedIssuesInput = UserCreateOrConnectWithoutAssignedIssuesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutAssignedIssuesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutAssignedIssuesInput_1.UserCreateWithoutAssignedIssuesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutAssignedIssuesInput_1.UserCreateWithoutAssignedIssuesInput)
], UserCreateOrConnectWithoutAssignedIssuesInput.prototype, "create", void 0);
exports.UserCreateOrConnectWithoutAssignedIssuesInput = UserCreateOrConnectWithoutAssignedIssuesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutAssignedIssuesInput", {})
], UserCreateOrConnectWithoutAssignedIssuesInput);
