"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateUserResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateUserArgs_1 = require("./args/AggregateUserArgs");
const User_1 = require("../../../models/User");
const AggregateUser_1 = require("../../outputs/AggregateUser");
const helpers_1 = require("../../../helpers");
let AggregateUserResolver = class AggregateUserResolver {
    async aggregateUser(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
exports.AggregateUserResolver = AggregateUserResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateUser_1.AggregateUser, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateUserArgs_1.AggregateUserArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateUserResolver.prototype, "aggregateUser", null);
exports.AggregateUserResolver = AggregateUserResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => User_1.User)
], AggregateUserResolver);
