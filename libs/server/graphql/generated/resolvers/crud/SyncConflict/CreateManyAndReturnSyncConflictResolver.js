"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAndReturnSyncConflictResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyAndReturnSyncConflictArgs_1 = require("./args/CreateManyAndReturnSyncConflictArgs");
const SyncConflict_1 = require("../../../models/SyncConflict");
const CreateManyAndReturnSyncConflict_1 = require("../../outputs/CreateManyAndReturnSyncConflict");
const helpers_1 = require("../../../helpers");
let CreateManyAndReturnSyncConflictResolver = class CreateManyAndReturnSyncConflictResolver {
    async createManyAndReturnSyncConflict(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).syncConflict.createManyAndReturn({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateManyAndReturnSyncConflictResolver = CreateManyAndReturnSyncConflictResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => [CreateManyAndReturnSyncConflict_1.CreateManyAndReturnSyncConflict], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyAndReturnSyncConflictArgs_1.CreateManyAndReturnSyncConflictArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyAndReturnSyncConflictResolver.prototype, "createManyAndReturnSyncConflict", null);
exports.CreateManyAndReturnSyncConflictResolver = CreateManyAndReturnSyncConflictResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => SyncConflict_1.SyncConflict)
], CreateManyAndReturnSyncConflictResolver);
