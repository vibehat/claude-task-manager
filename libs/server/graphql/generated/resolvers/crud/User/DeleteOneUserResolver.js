"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneUserResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneUserArgs_1 = require("./args/DeleteOneUserArgs");
const User_1 = require("../../../models/User");
const helpers_1 = require("../../../helpers");
let DeleteOneUserResolver = class DeleteOneUserResolver {
    async deleteOneUser(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).user.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteOneUserResolver = DeleteOneUserResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => User_1.User, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneUserArgs_1.DeleteOneUserArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneUserResolver.prototype, "deleteOneUser", null);
exports.DeleteOneUserResolver = DeleteOneUserResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => User_1.User)
], DeleteOneUserResolver);
