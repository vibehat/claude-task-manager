"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneUserResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneUserArgs_1 = require("./args/CreateOneUserArgs");
const User_1 = require("../../../models/User");
const helpers_1 = require("../../../helpers");
let CreateOneUserResolver = class CreateOneUserResolver {
    async createOneUser(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).user.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateOneUserResolver = CreateOneUserResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => User_1.User, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneUserArgs_1.CreateOneUserArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneUserResolver.prototype, "createOneUser", null);
exports.CreateOneUserResolver = CreateOneUserResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => User_1.User)
], CreateOneUserResolver);
