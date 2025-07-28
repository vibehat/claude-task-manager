"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueTaskMasterMetadataResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueTaskMasterMetadataArgs_1 = require("./args/FindUniqueTaskMasterMetadataArgs");
const TaskMasterMetadata_1 = require("../../../models/TaskMasterMetadata");
const helpers_1 = require("../../../helpers");
let FindUniqueTaskMasterMetadataResolver = class FindUniqueTaskMasterMetadataResolver {
    async findUniqueTaskMasterMetadata(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taskMasterMetadata.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueTaskMasterMetadataResolver = FindUniqueTaskMasterMetadataResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => TaskMasterMetadata_1.TaskMasterMetadata, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueTaskMasterMetadataArgs_1.FindUniqueTaskMasterMetadataArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueTaskMasterMetadataResolver.prototype, "findUniqueTaskMasterMetadata", null);
exports.FindUniqueTaskMasterMetadataResolver = FindUniqueTaskMasterMetadataResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TaskMasterMetadata_1.TaskMasterMetadata)
], FindUniqueTaskMasterMetadataResolver);
