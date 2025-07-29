"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyUserResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyUserArgs_1 = require("./args/DeleteManyUserArgs");
const User_1 = require("../../../models/User");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyUserResolver = class DeleteManyUserResolver {
    async deleteManyUser(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).user.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteManyUserResolver = DeleteManyUserResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyUserArgs_1.DeleteManyUserArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyUserResolver.prototype, "deleteManyUser", null);
exports.DeleteManyUserResolver = DeleteManyUserResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => User_1.User)
], DeleteManyUserResolver);
