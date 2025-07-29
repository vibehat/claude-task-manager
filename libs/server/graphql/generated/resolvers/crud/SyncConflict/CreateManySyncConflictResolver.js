"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManySyncConflictResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManySyncConflictArgs_1 = require("./args/CreateManySyncConflictArgs");
const SyncConflict_1 = require("../../../models/SyncConflict");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManySyncConflictResolver = class CreateManySyncConflictResolver {
    async createManySyncConflict(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).syncConflict.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateManySyncConflictResolver = CreateManySyncConflictResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManySyncConflictArgs_1.CreateManySyncConflictArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManySyncConflictResolver.prototype, "createManySyncConflict", null);
exports.CreateManySyncConflictResolver = CreateManySyncConflictResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => SyncConflict_1.SyncConflict)
], CreateManySyncConflictResolver);
