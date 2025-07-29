"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneTaskMasterMetadataResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneTaskMasterMetadataArgs_1 = require("./args/CreateOneTaskMasterMetadataArgs");
const TaskMasterMetadata_1 = require("../../../models/TaskMasterMetadata");
const helpers_1 = require("../../../helpers");
let CreateOneTaskMasterMetadataResolver = class CreateOneTaskMasterMetadataResolver {
    async createOneTaskMasterMetadata(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taskMasterMetadata.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateOneTaskMasterMetadataResolver = CreateOneTaskMasterMetadataResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => TaskMasterMetadata_1.TaskMasterMetadata, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneTaskMasterMetadataArgs_1.CreateOneTaskMasterMetadataArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneTaskMasterMetadataResolver.prototype, "createOneTaskMasterMetadata", null);
exports.CreateOneTaskMasterMetadataResolver = CreateOneTaskMasterMetadataResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TaskMasterMetadata_1.TaskMasterMetadata)
], CreateOneTaskMasterMetadataResolver);
