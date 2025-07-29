"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneIssuePriorityResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneIssuePriorityArgs_1 = require("./args/DeleteOneIssuePriorityArgs");
const IssuePriority_1 = require("../../../models/IssuePriority");
const helpers_1 = require("../../../helpers");
let DeleteOneIssuePriorityResolver = class DeleteOneIssuePriorityResolver {
    async deleteOneIssuePriority(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issuePriority.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteOneIssuePriorityResolver = DeleteOneIssuePriorityResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => IssuePriority_1.IssuePriority, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneIssuePriorityArgs_1.DeleteOneIssuePriorityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneIssuePriorityResolver.prototype, "deleteOneIssuePriority", null);
exports.DeleteOneIssuePriorityResolver = DeleteOneIssuePriorityResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => IssuePriority_1.IssuePriority)
], DeleteOneIssuePriorityResolver);
