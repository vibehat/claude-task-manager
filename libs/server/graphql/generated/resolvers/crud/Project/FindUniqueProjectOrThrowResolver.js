"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueProjectOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueProjectOrThrowArgs_1 = require("./args/FindUniqueProjectOrThrowArgs");
const Project_1 = require("../../../models/Project");
const helpers_1 = require("../../../helpers");
let FindUniqueProjectOrThrowResolver = class FindUniqueProjectOrThrowResolver {
    async getProject(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).project.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueProjectOrThrowResolver = FindUniqueProjectOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Project_1.Project, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueProjectOrThrowArgs_1.FindUniqueProjectOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueProjectOrThrowResolver.prototype, "getProject", null);
exports.FindUniqueProjectOrThrowResolver = FindUniqueProjectOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Project_1.Project)
], FindUniqueProjectOrThrowResolver);
