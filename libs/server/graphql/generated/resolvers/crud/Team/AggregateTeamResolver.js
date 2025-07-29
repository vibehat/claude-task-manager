"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTeamResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateTeamArgs_1 = require("./args/AggregateTeamArgs");
const Team_1 = require("../../../models/Team");
const AggregateTeam_1 = require("../../outputs/AggregateTeam");
const helpers_1 = require("../../../helpers");
let AggregateTeamResolver = class AggregateTeamResolver {
    async aggregateTeam(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).team.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
exports.AggregateTeamResolver = AggregateTeamResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateTeam_1.AggregateTeam, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateTeamArgs_1.AggregateTeamArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateTeamResolver.prototype, "aggregateTeam", null);
exports.AggregateTeamResolver = AggregateTeamResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Team_1.Team)
], AggregateTeamResolver);
