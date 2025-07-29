"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueProjectResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueProjectArgs_1 = require("./args/FindUniqueProjectArgs");
const Project_1 = require("../../../models/Project");
const helpers_1 = require("../../../helpers");
let FindUniqueProjectResolver = class FindUniqueProjectResolver {
    async project(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).project.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueProjectResolver = FindUniqueProjectResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Project_1.Project, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueProjectArgs_1.FindUniqueProjectArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueProjectResolver.prototype, "project", null);
exports.FindUniqueProjectResolver = FindUniqueProjectResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Project_1.Project)
], FindUniqueProjectResolver);
