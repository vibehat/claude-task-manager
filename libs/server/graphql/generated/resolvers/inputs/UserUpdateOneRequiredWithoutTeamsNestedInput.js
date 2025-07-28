"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutTeamsNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutTeamsInput_1 = require("../inputs/UserCreateOrConnectWithoutTeamsInput");
const UserCreateWithoutTeamsInput_1 = require("../inputs/UserCreateWithoutTeamsInput");
const UserUpdateToOneWithWhereWithoutTeamsInput_1 = require("../inputs/UserUpdateToOneWithWhereWithoutTeamsInput");
const UserUpsertWithoutTeamsInput_1 = require("../inputs/UserUpsertWithoutTeamsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutTeamsNestedInput = class UserUpdateOneRequiredWithoutTeamsNestedInput {
};
exports.UserUpdateOneRequiredWithoutTeamsNestedInput = UserUpdateOneRequiredWithoutTeamsNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutTeamsInput_1.UserCreateWithoutTeamsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutTeamsInput_1.UserCreateWithoutTeamsInput)
], UserUpdateOneRequiredWithoutTeamsNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutTeamsInput_1.UserCreateOrConnectWithoutTeamsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutTeamsInput_1.UserCreateOrConnectWithoutTeamsInput)
], UserUpdateOneRequiredWithoutTeamsNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutTeamsInput_1.UserUpsertWithoutTeamsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutTeamsInput_1.UserUpsertWithoutTeamsInput)
], UserUpdateOneRequiredWithoutTeamsNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutTeamsNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutTeamsInput_1.UserUpdateToOneWithWhereWithoutTeamsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateToOneWithWhereWithoutTeamsInput_1.UserUpdateToOneWithWhereWithoutTeamsInput)
], UserUpdateOneRequiredWithoutTeamsNestedInput.prototype, "update", void 0);
exports.UserUpdateOneRequiredWithoutTeamsNestedInput = UserUpdateOneRequiredWithoutTeamsNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutTeamsNestedInput", {})
], UserUpdateOneRequiredWithoutTeamsNestedInput);
