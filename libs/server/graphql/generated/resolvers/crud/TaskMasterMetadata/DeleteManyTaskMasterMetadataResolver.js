"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyTaskMasterMetadataResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyTaskMasterMetadataArgs_1 = require("./args/DeleteManyTaskMasterMetadataArgs");
const TaskMasterMetadata_1 = require("../../../models/TaskMasterMetadata");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyTaskMasterMetadataResolver = class DeleteManyTaskMasterMetadataResolver {
    async deleteManyTaskMasterMetadata(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taskMasterMetadata.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteManyTaskMasterMetadataResolver = DeleteManyTaskMasterMetadataResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyTaskMasterMetadataArgs_1.DeleteManyTaskMasterMetadataArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyTaskMasterMetadataResolver.prototype, "deleteManyTaskMasterMetadata", null);
exports.DeleteManyTaskMasterMetadataResolver = DeleteManyTaskMasterMetadataResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TaskMasterMetadata_1.TaskMasterMetadata)
], DeleteManyTaskMasterMetadataResolver);
