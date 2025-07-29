"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstTeamProjectOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstTeamProjectOrThrowArgs_1 = require("./args/FindFirstTeamProjectOrThrowArgs");
const TeamProject_1 = require("../../../models/TeamProject");
const helpers_1 = require("../../../helpers");
let FindFirstTeamProjectOrThrowResolver = class FindFirstTeamProjectOrThrowResolver {
    async findFirstTeamProjectOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).teamProject.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstTeamProjectOrThrowResolver = FindFirstTeamProjectOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => TeamProject_1.TeamProject, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTeamProjectOrThrowArgs_1.FindFirstTeamProjectOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstTeamProjectOrThrowResolver.prototype, "findFirstTeamProjectOrThrow", null);
exports.FindFirstTeamProjectOrThrowResolver = FindFirstTeamProjectOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TeamProject_1.TeamProject)
], FindFirstTeamProjectOrThrowResolver);
