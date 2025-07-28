"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneUserResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneUserArgs_1 = require("./args/UpdateOneUserArgs");
const User_1 = require("../../../models/User");
const helpers_1 = require("../../../helpers");
let UpdateOneUserResolver = class UpdateOneUserResolver {
    async updateOneUser(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).user.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateOneUserResolver = UpdateOneUserResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => User_1.User, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneUserArgs_1.UpdateOneUserArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneUserResolver.prototype, "updateOneUser", null);
exports.UpdateOneUserResolver = UpdateOneUserResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => User_1.User)
], UpdateOneUserResolver);
