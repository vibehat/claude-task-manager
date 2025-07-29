"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstTaskMasterMetadataOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstTaskMasterMetadataOrThrowArgs_1 = require("./args/FindFirstTaskMasterMetadataOrThrowArgs");
const TaskMasterMetadata_1 = require("../../../models/TaskMasterMetadata");
const helpers_1 = require("../../../helpers");
let FindFirstTaskMasterMetadataOrThrowResolver = class FindFirstTaskMasterMetadataOrThrowResolver {
    async findFirstTaskMasterMetadataOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taskMasterMetadata.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstTaskMasterMetadataOrThrowResolver = FindFirstTaskMasterMetadataOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => TaskMasterMetadata_1.TaskMasterMetadata, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTaskMasterMetadataOrThrowArgs_1.FindFirstTaskMasterMetadataOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstTaskMasterMetadataOrThrowResolver.prototype, "findFirstTaskMasterMetadataOrThrow", null);
exports.FindFirstTaskMasterMetadataOrThrowResolver = FindFirstTaskMasterMetadataOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TaskMasterMetadata_1.TaskMasterMetadata)
], FindFirstTaskMasterMetadataOrThrowResolver);
