"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamMemberCreateManyUserInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamMemberCreateManyUserInput_1 = require("../inputs/TeamMemberCreateManyUserInput");
let TeamMemberCreateManyUserInputEnvelope = class TeamMemberCreateManyUserInputEnvelope {
};
exports.TeamMemberCreateManyUserInputEnvelope = TeamMemberCreateManyUserInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamMemberCreateManyUserInput_1.TeamMemberCreateManyUserInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], TeamMemberCreateManyUserInputEnvelope.prototype, "data", void 0);
exports.TeamMemberCreateManyUserInputEnvelope = TeamMemberCreateManyUserInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamMemberCreateManyUserInputEnvelope", {})
], TeamMemberCreateManyUserInputEnvelope);
