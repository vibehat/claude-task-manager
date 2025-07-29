"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneTeamProjectResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneTeamProjectArgs_1 = require("./args/CreateOneTeamProjectArgs");
const TeamProject_1 = require("../../../models/TeamProject");
const helpers_1 = require("../../../helpers");
let CreateOneTeamProjectResolver = class CreateOneTeamProjectResolver {
    async createOneTeamProject(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).teamProject.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateOneTeamProjectResolver = CreateOneTeamProjectResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => TeamProject_1.TeamProject, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneTeamProjectArgs_1.CreateOneTeamProjectArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneTeamProjectResolver.prototype, "createOneTeamProject", null);
exports.CreateOneTeamProjectResolver = CreateOneTeamProjectResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TeamProject_1.TeamProject)
], CreateOneTeamProjectResolver);
