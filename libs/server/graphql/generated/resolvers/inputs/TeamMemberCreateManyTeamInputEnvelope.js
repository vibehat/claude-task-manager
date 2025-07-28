"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamMemberCreateManyTeamInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamMemberCreateManyTeamInput_1 = require("../inputs/TeamMemberCreateManyTeamInput");
let TeamMemberCreateManyTeamInputEnvelope = class TeamMemberCreateManyTeamInputEnvelope {
};
exports.TeamMemberCreateManyTeamInputEnvelope = TeamMemberCreateManyTeamInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamMemberCreateManyTeamInput_1.TeamMemberCreateManyTeamInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], TeamMemberCreateManyTeamInputEnvelope.prototype, "data", void 0);
exports.TeamMemberCreateManyTeamInputEnvelope = TeamMemberCreateManyTeamInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamMemberCreateManyTeamInputEnvelope", {})
], TeamMemberCreateManyTeamInputEnvelope);
