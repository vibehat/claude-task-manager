"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamProjectCreateManyTeamInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamProjectCreateManyTeamInput_1 = require("../inputs/TeamProjectCreateManyTeamInput");
let TeamProjectCreateManyTeamInputEnvelope = class TeamProjectCreateManyTeamInputEnvelope {
};
exports.TeamProjectCreateManyTeamInputEnvelope = TeamProjectCreateManyTeamInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamProjectCreateManyTeamInput_1.TeamProjectCreateManyTeamInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], TeamProjectCreateManyTeamInputEnvelope.prototype, "data", void 0);
exports.TeamProjectCreateManyTeamInputEnvelope = TeamProjectCreateManyTeamInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamProjectCreateManyTeamInputEnvelope", {})
], TeamProjectCreateManyTeamInputEnvelope);
