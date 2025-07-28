"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneWithoutAssignedIssuesNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutAssignedIssuesInput_1 = require("../inputs/UserCreateOrConnectWithoutAssignedIssuesInput");
const UserCreateWithoutAssignedIssuesInput_1 = require("../inputs/UserCreateWithoutAssignedIssuesInput");
const UserUpdateToOneWithWhereWithoutAssignedIssuesInput_1 = require("../inputs/UserUpdateToOneWithWhereWithoutAssignedIssuesInput");
const UserUpsertWithoutAssignedIssuesInput_1 = require("../inputs/UserUpsertWithoutAssignedIssuesInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneWithoutAssignedIssuesNestedInput = class UserUpdateOneWithoutAssignedIssuesNestedInput {
};
exports.UserUpdateOneWithoutAssignedIssuesNestedInput = UserUpdateOneWithoutAssignedIssuesNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutAssignedIssuesInput_1.UserCreateWithoutAssignedIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutAssignedIssuesInput_1.UserCreateWithoutAssignedIssuesInput)
], UserUpdateOneWithoutAssignedIssuesNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutAssignedIssuesInput_1.UserCreateOrConnectWithoutAssignedIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutAssignedIssuesInput_1.UserCreateOrConnectWithoutAssignedIssuesInput)
], UserUpdateOneWithoutAssignedIssuesNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutAssignedIssuesInput_1.UserUpsertWithoutAssignedIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutAssignedIssuesInput_1.UserUpsertWithoutAssignedIssuesInput)
], UserUpdateOneWithoutAssignedIssuesNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpdateOneWithoutAssignedIssuesNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpdateOneWithoutAssignedIssuesNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneWithoutAssignedIssuesNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutAssignedIssuesInput_1.UserUpdateToOneWithWhereWithoutAssignedIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateToOneWithWhereWithoutAssignedIssuesInput_1.UserUpdateToOneWithWhereWithoutAssignedIssuesInput)
], UserUpdateOneWithoutAssignedIssuesNestedInput.prototype, "update", void 0);
exports.UserUpdateOneWithoutAssignedIssuesNestedInput = UserUpdateOneWithoutAssignedIssuesNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneWithoutAssignedIssuesNestedInput", {})
], UserUpdateOneWithoutAssignedIssuesNestedInput);
