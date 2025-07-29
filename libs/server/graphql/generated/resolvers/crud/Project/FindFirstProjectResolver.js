"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstProjectResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstProjectArgs_1 = require("./args/FindFirstProjectArgs");
const Project_1 = require("../../../models/Project");
const helpers_1 = require("../../../helpers");
let FindFirstProjectResolver = class FindFirstProjectResolver {
    async findFirstProject(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).project.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstProjectResolver = FindFirstProjectResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Project_1.Project, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstProjectArgs_1.FindFirstProjectArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstProjectResolver.prototype, "findFirstProject", null);
exports.FindFirstProjectResolver = FindFirstProjectResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Project_1.Project)
], FindFirstProjectResolver);
