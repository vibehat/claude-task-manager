"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByProjectResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByProjectArgs_1 = require("./args/GroupByProjectArgs");
const Project_1 = require("../../../models/Project");
const ProjectGroupBy_1 = require("../../outputs/ProjectGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByProjectResolver = class GroupByProjectResolver {
    async groupByProject(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).project.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
exports.GroupByProjectResolver = GroupByProjectResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ProjectGroupBy_1.ProjectGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByProjectArgs_1.GroupByProjectArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByProjectResolver.prototype, "groupByProject", null);
exports.GroupByProjectResolver = GroupByProjectResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Project_1.Project)
], GroupByProjectResolver);
