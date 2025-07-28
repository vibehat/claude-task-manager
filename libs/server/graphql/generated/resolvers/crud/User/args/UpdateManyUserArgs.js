"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyUserArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserUpdateManyMutationInput_1 = require("../../../inputs/UserUpdateManyMutationInput");
const UserWhereInput_1 = require("../../../inputs/UserWhereInput");
let UpdateManyUserArgs = class UpdateManyUserArgs {
};
exports.UpdateManyUserArgs = UpdateManyUserArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateManyMutationInput_1.UserUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateManyMutationInput_1.UserUpdateManyMutationInput)
], UpdateManyUserArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UpdateManyUserArgs.prototype, "where", void 0);
exports.UpdateManyUserArgs = UpdateManyUserArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyUserArgs);
