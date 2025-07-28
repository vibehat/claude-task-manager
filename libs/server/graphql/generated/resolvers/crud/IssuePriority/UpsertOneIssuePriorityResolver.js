"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneIssuePriorityResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneIssuePriorityArgs_1 = require("./args/UpsertOneIssuePriorityArgs");
const IssuePriority_1 = require("../../../models/IssuePriority");
const helpers_1 = require("../../../helpers");
let UpsertOneIssuePriorityResolver = class UpsertOneIssuePriorityResolver {
    async upsertOneIssuePriority(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issuePriority.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpsertOneIssuePriorityResolver = UpsertOneIssuePriorityResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => IssuePriority_1.IssuePriority, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneIssuePriorityArgs_1.UpsertOneIssuePriorityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneIssuePriorityResolver.prototype, "upsertOneIssuePriority", null);
exports.UpsertOneIssuePriorityResolver = UpsertOneIssuePriorityResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => IssuePriority_1.IssuePriority)
], UpsertOneIssuePriorityResolver);
