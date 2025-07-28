"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAndReturnTaskMasterMetadataResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyAndReturnTaskMasterMetadataArgs_1 = require("./args/CreateManyAndReturnTaskMasterMetadataArgs");
const TaskMasterMetadata_1 = require("../../../models/TaskMasterMetadata");
const CreateManyAndReturnTaskMasterMetadata_1 = require("../../outputs/CreateManyAndReturnTaskMasterMetadata");
const helpers_1 = require("../../../helpers");
let CreateManyAndReturnTaskMasterMetadataResolver = class CreateManyAndReturnTaskMasterMetadataResolver {
    async createManyAndReturnTaskMasterMetadata(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taskMasterMetadata.createManyAndReturn({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateManyAndReturnTaskMasterMetadataResolver = CreateManyAndReturnTaskMasterMetadataResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => [CreateManyAndReturnTaskMasterMetadata_1.CreateManyAndReturnTaskMasterMetadata], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyAndReturnTaskMasterMetadataArgs_1.CreateManyAndReturnTaskMasterMetadataArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyAndReturnTaskMasterMetadataResolver.prototype, "createManyAndReturnTaskMasterMetadata", null);
exports.CreateManyAndReturnTaskMasterMetadataResolver = CreateManyAndReturnTaskMasterMetadataResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TaskMasterMetadata_1.TaskMasterMetadata)
], CreateManyAndReturnTaskMasterMetadataResolver);
