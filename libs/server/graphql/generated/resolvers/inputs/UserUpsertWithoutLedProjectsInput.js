"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutLedProjectsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutLedProjectsInput_1 = require("../inputs/UserCreateWithoutLedProjectsInput");
const UserUpdateWithoutLedProjectsInput_1 = require("../inputs/UserUpdateWithoutLedProjectsInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserUpsertWithoutLedProjectsInput = class UserUpsertWithoutLedProjectsInput {
};
exports.UserUpsertWithoutLedProjectsInput = UserUpsertWithoutLedProjectsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutLedProjectsInput_1.UserUpdateWithoutLedProjectsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutLedProjectsInput_1.UserUpdateWithoutLedProjectsInput)
], UserUpsertWithoutLedProjectsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutLedProjectsInput_1.UserCreateWithoutLedProjectsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutLedProjectsInput_1.UserCreateWithoutLedProjectsInput)
], UserUpsertWithoutLedProjectsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpsertWithoutLedProjectsInput.prototype, "where", void 0);
exports.UserUpsertWithoutLedProjectsInput = UserUpsertWithoutLedProjectsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutLedProjectsInput", {})
], UserUpsertWithoutLedProjectsInput);
