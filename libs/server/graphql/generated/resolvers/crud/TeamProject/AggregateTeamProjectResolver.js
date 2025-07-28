"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTeamProjectResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateTeamProjectArgs_1 = require("./args/AggregateTeamProjectArgs");
const TeamProject_1 = require("../../../models/TeamProject");
const AggregateTeamProject_1 = require("../../outputs/AggregateTeamProject");
const helpers_1 = require("../../../helpers");
let AggregateTeamProjectResolver = class AggregateTeamProjectResolver {
    async aggregateTeamProject(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).teamProject.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
exports.AggregateTeamProjectResolver = AggregateTeamProjectResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateTeamProject_1.AggregateTeamProject, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateTeamProjectArgs_1.AggregateTeamProjectArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateTeamProjectResolver.prototype, "aggregateTeamProject", null);
exports.AggregateTeamProjectResolver = AggregateTeamProjectResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TeamProject_1.TeamProject)
], AggregateTeamProjectResolver);
