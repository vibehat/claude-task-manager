"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTeamMemberResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateTeamMemberArgs_1 = require("./args/AggregateTeamMemberArgs");
const TeamMember_1 = require("../../../models/TeamMember");
const AggregateTeamMember_1 = require("../../outputs/AggregateTeamMember");
const helpers_1 = require("../../../helpers");
let AggregateTeamMemberResolver = class AggregateTeamMemberResolver {
    async aggregateTeamMember(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).teamMember.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
exports.AggregateTeamMemberResolver = AggregateTeamMemberResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateTeamMember_1.AggregateTeamMember, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateTeamMemberArgs_1.AggregateTeamMemberArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateTeamMemberResolver.prototype, "aggregateTeamMember", null);
exports.AggregateTeamMemberResolver = AggregateTeamMemberResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TeamMember_1.TeamMember)
], AggregateTeamMemberResolver);
