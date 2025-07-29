"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyTaskMasterMetadataResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyTaskMasterMetadataArgs_1 = require("./args/CreateManyTaskMasterMetadataArgs");
const TaskMasterMetadata_1 = require("../../../models/TaskMasterMetadata");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyTaskMasterMetadataResolver = class CreateManyTaskMasterMetadataResolver {
    async createManyTaskMasterMetadata(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taskMasterMetadata.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateManyTaskMasterMetadataResolver = CreateManyTaskMasterMetadataResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyTaskMasterMetadataArgs_1.CreateManyTaskMasterMetadataArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyTaskMasterMetadataResolver.prototype, "createManyTaskMasterMetadata", null);
exports.CreateManyTaskMasterMetadataResolver = CreateManyTaskMasterMetadataResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TaskMasterMetadata_1.TaskMasterMetadata)
], CreateManyTaskMasterMetadataResolver);
