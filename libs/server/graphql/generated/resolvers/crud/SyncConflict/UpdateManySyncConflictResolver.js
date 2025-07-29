"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManySyncConflictResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManySyncConflictArgs_1 = require("./args/UpdateManySyncConflictArgs");
const SyncConflict_1 = require("../../../models/SyncConflict");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManySyncConflictResolver = class UpdateManySyncConflictResolver {
    async updateManySyncConflict(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).syncConflict.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateManySyncConflictResolver = UpdateManySyncConflictResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManySyncConflictArgs_1.UpdateManySyncConflictArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManySyncConflictResolver.prototype, "updateManySyncConflict", null);
exports.UpdateManySyncConflictResolver = UpdateManySyncConflictResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => SyncConflict_1.SyncConflict)
], UpdateManySyncConflictResolver);
