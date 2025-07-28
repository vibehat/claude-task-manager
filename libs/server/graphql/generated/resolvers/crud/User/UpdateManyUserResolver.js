"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyUserResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyUserArgs_1 = require("./args/UpdateManyUserArgs");
const User_1 = require("../../../models/User");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyUserResolver = class UpdateManyUserResolver {
    async updateManyUser(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).user.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateManyUserResolver = UpdateManyUserResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyUserArgs_1.UpdateManyUserArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyUserResolver.prototype, "updateManyUser", null);
exports.UpdateManyUserResolver = UpdateManyUserResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => User_1.User)
], UpdateManyUserResolver);
