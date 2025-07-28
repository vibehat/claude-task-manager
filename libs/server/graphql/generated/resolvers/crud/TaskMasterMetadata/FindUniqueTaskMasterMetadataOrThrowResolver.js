"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueTaskMasterMetadataOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueTaskMasterMetadataOrThrowArgs_1 = require("./args/FindUniqueTaskMasterMetadataOrThrowArgs");
const TaskMasterMetadata_1 = require("../../../models/TaskMasterMetadata");
const helpers_1 = require("../../../helpers");
let FindUniqueTaskMasterMetadataOrThrowResolver = class FindUniqueTaskMasterMetadataOrThrowResolver {
    async findUniqueTaskMasterMetadataOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taskMasterMetadata.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueTaskMasterMetadataOrThrowResolver = FindUniqueTaskMasterMetadataOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => TaskMasterMetadata_1.TaskMasterMetadata, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueTaskMasterMetadataOrThrowArgs_1.FindUniqueTaskMasterMetadataOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueTaskMasterMetadataOrThrowResolver.prototype, "findUniqueTaskMasterMetadataOrThrow", null);
exports.FindUniqueTaskMasterMetadataOrThrowResolver = FindUniqueTaskMasterMetadataOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TaskMasterMetadata_1.TaskMasterMetadata)
], FindUniqueTaskMasterMetadataOrThrowResolver);
