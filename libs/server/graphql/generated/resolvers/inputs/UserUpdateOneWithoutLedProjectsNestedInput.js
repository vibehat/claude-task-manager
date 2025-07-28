"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneWithoutLedProjectsNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutLedProjectsInput_1 = require("../inputs/UserCreateOrConnectWithoutLedProjectsInput");
const UserCreateWithoutLedProjectsInput_1 = require("../inputs/UserCreateWithoutLedProjectsInput");
const UserUpdateToOneWithWhereWithoutLedProjectsInput_1 = require("../inputs/UserUpdateToOneWithWhereWithoutLedProjectsInput");
const UserUpsertWithoutLedProjectsInput_1 = require("../inputs/UserUpsertWithoutLedProjectsInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneWithoutLedProjectsNestedInput = class UserUpdateOneWithoutLedProjectsNestedInput {
};
exports.UserUpdateOneWithoutLedProjectsNestedInput = UserUpdateOneWithoutLedProjectsNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutLedProjectsInput_1.UserCreateWithoutLedProjectsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutLedProjectsInput_1.UserCreateWithoutLedProjectsInput)
], UserUpdateOneWithoutLedProjectsNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutLedProjectsInput_1.UserCreateOrConnectWithoutLedProjectsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutLedProjectsInput_1.UserCreateOrConnectWithoutLedProjectsInput)
], UserUpdateOneWithoutLedProjectsNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutLedProjectsInput_1.UserUpsertWithoutLedProjectsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutLedProjectsInput_1.UserUpsertWithoutLedProjectsInput)
], UserUpdateOneWithoutLedProjectsNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpdateOneWithoutLedProjectsNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpdateOneWithoutLedProjectsNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneWithoutLedProjectsNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutLedProjectsInput_1.UserUpdateToOneWithWhereWithoutLedProjectsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateToOneWithWhereWithoutLedProjectsInput_1.UserUpdateToOneWithWhereWithoutLedProjectsInput)
], UserUpdateOneWithoutLedProjectsNestedInput.prototype, "update", void 0);
exports.UserUpdateOneWithoutLedProjectsNestedInput = UserUpdateOneWithoutLedProjectsNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneWithoutLedProjectsNestedInput", {})
], UserUpdateOneWithoutLedProjectsNestedInput);
