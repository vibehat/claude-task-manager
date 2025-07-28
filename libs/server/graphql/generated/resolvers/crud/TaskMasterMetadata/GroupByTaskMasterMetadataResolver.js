"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByTaskMasterMetadataResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByTaskMasterMetadataArgs_1 = require("./args/GroupByTaskMasterMetadataArgs");
const TaskMasterMetadata_1 = require("../../../models/TaskMasterMetadata");
const TaskMasterMetadataGroupBy_1 = require("../../outputs/TaskMasterMetadataGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByTaskMasterMetadataResolver = class GroupByTaskMasterMetadataResolver {
    async groupByTaskMasterMetadata(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taskMasterMetadata.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
exports.GroupByTaskMasterMetadataResolver = GroupByTaskMasterMetadataResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [TaskMasterMetadataGroupBy_1.TaskMasterMetadataGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByTaskMasterMetadataArgs_1.GroupByTaskMasterMetadataArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByTaskMasterMetadataResolver.prototype, "groupByTaskMasterMetadata", null);
exports.GroupByTaskMasterMetadataResolver = GroupByTaskMasterMetadataResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TaskMasterMetadata_1.TaskMasterMetadata)
], GroupByTaskMasterMetadataResolver);
