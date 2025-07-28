"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutAssignedIssuesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutAssignedIssuesInput_1 = require("../inputs/UserCreateWithoutAssignedIssuesInput");
const UserUpdateWithoutAssignedIssuesInput_1 = require("../inputs/UserUpdateWithoutAssignedIssuesInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserUpsertWithoutAssignedIssuesInput = class UserUpsertWithoutAssignedIssuesInput {
};
exports.UserUpsertWithoutAssignedIssuesInput = UserUpsertWithoutAssignedIssuesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutAssignedIssuesInput_1.UserUpdateWithoutAssignedIssuesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutAssignedIssuesInput_1.UserUpdateWithoutAssignedIssuesInput)
], UserUpsertWithoutAssignedIssuesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutAssignedIssuesInput_1.UserCreateWithoutAssignedIssuesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutAssignedIssuesInput_1.UserCreateWithoutAssignedIssuesInput)
], UserUpsertWithoutAssignedIssuesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpsertWithoutAssignedIssuesInput.prototype, "where", void 0);
exports.UserUpsertWithoutAssignedIssuesInput = UserUpsertWithoutAssignedIssuesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutAssignedIssuesInput", {})
], UserUpsertWithoutAssignedIssuesInput);
