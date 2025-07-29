"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstProjectOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstProjectOrThrowArgs_1 = require("./args/FindFirstProjectOrThrowArgs");
const Project_1 = require("../../../models/Project");
const helpers_1 = require("../../../helpers");
let FindFirstProjectOrThrowResolver = class FindFirstProjectOrThrowResolver {
    async findFirstProjectOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).project.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstProjectOrThrowResolver = FindFirstProjectOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Project_1.Project, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstProjectOrThrowArgs_1.FindFirstProjectOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstProjectOrThrowResolver.prototype, "findFirstProjectOrThrow", null);
exports.FindFirstProjectOrThrowResolver = FindFirstProjectOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Project_1.Project)
], FindFirstProjectOrThrowResolver);
