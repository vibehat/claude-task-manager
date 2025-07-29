"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyTaskMasterMetadataResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyTaskMasterMetadataArgs_1 = require("./args/UpdateManyTaskMasterMetadataArgs");
const TaskMasterMetadata_1 = require("../../../models/TaskMasterMetadata");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyTaskMasterMetadataResolver = class UpdateManyTaskMasterMetadataResolver {
    async updateManyTaskMasterMetadata(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taskMasterMetadata.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateManyTaskMasterMetadataResolver = UpdateManyTaskMasterMetadataResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyTaskMasterMetadataArgs_1.UpdateManyTaskMasterMetadataArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyTaskMasterMetadataResolver.prototype, "updateManyTaskMasterMetadata", null);
exports.UpdateManyTaskMasterMetadataResolver = UpdateManyTaskMasterMetadataResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TaskMasterMetadata_1.TaskMasterMetadata)
], UpdateManyTaskMasterMetadataResolver);
