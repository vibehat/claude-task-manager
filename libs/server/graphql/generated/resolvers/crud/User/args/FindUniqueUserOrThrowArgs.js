"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueUserOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserWhereUniqueInput_1 = require("../../../inputs/UserWhereUniqueInput");
let FindUniqueUserOrThrowArgs = class FindUniqueUserOrThrowArgs {
};
exports.FindUniqueUserOrThrowArgs = FindUniqueUserOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], FindUniqueUserOrThrowArgs.prototype, "where", void 0);
exports.FindUniqueUserOrThrowArgs = FindUniqueUserOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueUserOrThrowArgs);
