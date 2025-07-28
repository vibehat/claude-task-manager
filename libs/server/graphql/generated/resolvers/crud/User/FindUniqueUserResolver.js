"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueUserResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueUserArgs_1 = require("./args/FindUniqueUserArgs");
const User_1 = require("../../../models/User");
const helpers_1 = require("../../../helpers");
let FindUniqueUserResolver = class FindUniqueUserResolver {
    async user(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueUserResolver = FindUniqueUserResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => User_1.User, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueUserArgs_1.FindUniqueUserArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueUserResolver.prototype, "user", null);
exports.FindUniqueUserResolver = FindUniqueUserResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => User_1.User)
], FindUniqueUserResolver);
