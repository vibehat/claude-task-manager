"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutAssignedIssuesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutAssignedIssuesInput_1 = require("../inputs/UserCreateOrConnectWithoutAssignedIssuesInput");
const UserCreateWithoutAssignedIssuesInput_1 = require("../inputs/UserCreateWithoutAssignedIssuesInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutAssignedIssuesInput = class UserCreateNestedOneWithoutAssignedIssuesInput {
};
exports.UserCreateNestedOneWithoutAssignedIssuesInput = UserCreateNestedOneWithoutAssignedIssuesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutAssignedIssuesInput_1.UserCreateWithoutAssignedIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutAssignedIssuesInput_1.UserCreateWithoutAssignedIssuesInput)
], UserCreateNestedOneWithoutAssignedIssuesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutAssignedIssuesInput_1.UserCreateOrConnectWithoutAssignedIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutAssignedIssuesInput_1.UserCreateOrConnectWithoutAssignedIssuesInput)
], UserCreateNestedOneWithoutAssignedIssuesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutAssignedIssuesInput.prototype, "connect", void 0);
exports.UserCreateNestedOneWithoutAssignedIssuesInput = UserCreateNestedOneWithoutAssignedIssuesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutAssignedIssuesInput", {})
], UserCreateNestedOneWithoutAssignedIssuesInput);
