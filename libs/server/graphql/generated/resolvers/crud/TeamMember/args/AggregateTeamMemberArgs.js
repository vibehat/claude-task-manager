"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTeamMemberArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamMemberOrderByWithRelationInput_1 = require("../../../inputs/TeamMemberOrderByWithRelationInput");
const TeamMemberWhereInput_1 = require("../../../inputs/TeamMemberWhereInput");
const TeamMemberWhereUniqueInput_1 = require("../../../inputs/TeamMemberWhereUniqueInput");
let AggregateTeamMemberArgs = class AggregateTeamMemberArgs {
};
exports.AggregateTeamMemberArgs = AggregateTeamMemberArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberWhereInput_1.TeamMemberWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamMemberWhereInput_1.TeamMemberWhereInput)
], AggregateTeamMemberArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamMemberOrderByWithRelationInput_1.TeamMemberOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateTeamMemberArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberWhereUniqueInput_1.TeamMemberWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamMemberWhereUniqueInput_1.TeamMemberWhereUniqueInput)
], AggregateTeamMemberArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateTeamMemberArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateTeamMemberArgs.prototype, "skip", void 0);
exports.AggregateTeamMemberArgs = AggregateTeamMemberArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateTeamMemberArgs);
