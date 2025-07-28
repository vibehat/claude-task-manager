"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneTaskMasterMetadataResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneTaskMasterMetadataArgs_1 = require("./args/DeleteOneTaskMasterMetadataArgs");
const TaskMasterMetadata_1 = require("../../../models/TaskMasterMetadata");
const helpers_1 = require("../../../helpers");
let DeleteOneTaskMasterMetadataResolver = class DeleteOneTaskMasterMetadataResolver {
    async deleteOneTaskMasterMetadata(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taskMasterMetadata.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteOneTaskMasterMetadataResolver = DeleteOneTaskMasterMetadataResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => TaskMasterMetadata_1.TaskMasterMetadata, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneTaskMasterMetadataArgs_1.DeleteOneTaskMasterMetadataArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneTaskMasterMetadataResolver.prototype, "deleteOneTaskMasterMetadata", null);
exports.DeleteOneTaskMasterMetadataResolver = DeleteOneTaskMasterMetadataResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TaskMasterMetadata_1.TaskMasterMetadata)
], DeleteOneTaskMasterMetadataResolver);
