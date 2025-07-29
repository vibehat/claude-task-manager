"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyProjectResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyProjectArgs_1 = require("./args/FindManyProjectArgs");
const Project_1 = require("../../../models/Project");
const helpers_1 = require("../../../helpers");
let FindManyProjectResolver = class FindManyProjectResolver {
    async projects(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).project.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindManyProjectResolver = FindManyProjectResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Project_1.Project], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyProjectArgs_1.FindManyProjectArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyProjectResolver.prototype, "projects", null);
exports.FindManyProjectResolver = FindManyProjectResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Project_1.Project)
], FindManyProjectResolver);
