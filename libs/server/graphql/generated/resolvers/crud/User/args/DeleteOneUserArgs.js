"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneUserArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserWhereUniqueInput_1 = require("../../../inputs/UserWhereUniqueInput");
let DeleteOneUserArgs = class DeleteOneUserArgs {
};
exports.DeleteOneUserArgs = DeleteOneUserArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], DeleteOneUserArgs.prototype, "where", void 0);
exports.DeleteOneUserArgs = DeleteOneUserArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneUserArgs);
