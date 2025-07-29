"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstUserResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstUserArgs_1 = require("./args/FindFirstUserArgs");
const User_1 = require("../../../models/User");
const helpers_1 = require("../../../helpers");
let FindFirstUserResolver = class FindFirstUserResolver {
    async findFirstUser(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstUserResolver = FindFirstUserResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => User_1.User, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstUserArgs_1.FindFirstUserArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstUserResolver.prototype, "findFirstUser", null);
exports.FindFirstUserResolver = FindFirstUserResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => User_1.User)
], FindFirstUserResolver);
