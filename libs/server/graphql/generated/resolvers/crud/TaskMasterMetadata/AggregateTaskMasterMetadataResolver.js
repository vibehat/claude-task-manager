"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTaskMasterMetadataResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateTaskMasterMetadataArgs_1 = require("./args/AggregateTaskMasterMetadataArgs");
const TaskMasterMetadata_1 = require("../../../models/TaskMasterMetadata");
const AggregateTaskMasterMetadata_1 = require("../../outputs/AggregateTaskMasterMetadata");
const helpers_1 = require("../../../helpers");
let AggregateTaskMasterMetadataResolver = class AggregateTaskMasterMetadataResolver {
    async aggregateTaskMasterMetadata(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).taskMasterMetadata.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
exports.AggregateTaskMasterMetadataResolver = AggregateTaskMasterMetadataResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateTaskMasterMetadata_1.AggregateTaskMasterMetadata, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateTaskMasterMetadataArgs_1.AggregateTaskMasterMetadataArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateTaskMasterMetadataResolver.prototype, "aggregateTaskMasterMetadata", null);
exports.AggregateTaskMasterMetadataResolver = AggregateTaskMasterMetadataResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TaskMasterMetadata_1.TaskMasterMetadata)
], AggregateTaskMasterMetadataResolver);
