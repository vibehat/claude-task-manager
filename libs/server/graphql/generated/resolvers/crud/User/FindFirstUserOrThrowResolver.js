"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstUserOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstUserOrThrowArgs_1 = require("./args/FindFirstUserOrThrowArgs");
const User_1 = require("../../../models/User");
const helpers_1 = require("../../../helpers");
let FindFirstUserOrThrowResolver = class FindFirstUserOrThrowResolver {
    async findFirstUserOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstUserOrThrowResolver = FindFirstUserOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => User_1.User, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstUserOrThrowArgs_1.FindFirstUserOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstUserOrThrowResolver.prototype, "findFirstUserOrThrow", null);
exports.FindFirstUserOrThrowResolver = FindFirstUserOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => User_1.User)
], FindFirstUserOrThrowResolver);
