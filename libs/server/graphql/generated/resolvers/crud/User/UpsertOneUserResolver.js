"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneUserResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneUserArgs_1 = require("./args/UpsertOneUserArgs");
const User_1 = require("../../../models/User");
const helpers_1 = require("../../../helpers");
let UpsertOneUserResolver = class UpsertOneUserResolver {
    async upsertOneUser(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).user.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpsertOneUserResolver = UpsertOneUserResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => User_1.User, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneUserArgs_1.UpsertOneUserArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneUserResolver.prototype, "upsertOneUser", null);
exports.UpsertOneUserResolver = UpsertOneUserResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => User_1.User)
], UpsertOneUserResolver);
