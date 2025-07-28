"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamMemberUpdateWithWhereUniqueWithoutTeamInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamMemberUpdateWithoutTeamInput_1 = require("../inputs/TeamMemberUpdateWithoutTeamInput");
const TeamMemberWhereUniqueInput_1 = require("../inputs/TeamMemberWhereUniqueInput");
let TeamMemberUpdateWithWhereUniqueWithoutTeamInput = class TeamMemberUpdateWithWhereUniqueWithoutTeamInput {
};
exports.TeamMemberUpdateWithWhereUniqueWithoutTeamInput = TeamMemberUpdateWithWhereUniqueWithoutTeamInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberWhereUniqueInput_1.TeamMemberWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamMemberWhereUniqueInput_1.TeamMemberWhereUniqueInput)
], TeamMemberUpdateWithWhereUniqueWithoutTeamInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberUpdateWithoutTeamInput_1.TeamMemberUpdateWithoutTeamInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamMemberUpdateWithoutTeamInput_1.TeamMemberUpdateWithoutTeamInput)
], TeamMemberUpdateWithWhereUniqueWithoutTeamInput.prototype, "data", void 0);
exports.TeamMemberUpdateWithWhereUniqueWithoutTeamInput = TeamMemberUpdateWithWhereUniqueWithoutTeamInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamMemberUpdateWithWhereUniqueWithoutTeamInput", {})
], TeamMemberUpdateWithWhereUniqueWithoutTeamInput);
