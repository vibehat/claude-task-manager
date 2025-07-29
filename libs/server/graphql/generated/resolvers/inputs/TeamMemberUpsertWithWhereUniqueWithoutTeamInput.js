"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamMemberUpsertWithWhereUniqueWithoutTeamInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamMemberCreateWithoutTeamInput_1 = require("../inputs/TeamMemberCreateWithoutTeamInput");
const TeamMemberUpdateWithoutTeamInput_1 = require("../inputs/TeamMemberUpdateWithoutTeamInput");
const TeamMemberWhereUniqueInput_1 = require("../inputs/TeamMemberWhereUniqueInput");
let TeamMemberUpsertWithWhereUniqueWithoutTeamInput = class TeamMemberUpsertWithWhereUniqueWithoutTeamInput {
};
exports.TeamMemberUpsertWithWhereUniqueWithoutTeamInput = TeamMemberUpsertWithWhereUniqueWithoutTeamInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberWhereUniqueInput_1.TeamMemberWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamMemberWhereUniqueInput_1.TeamMemberWhereUniqueInput)
], TeamMemberUpsertWithWhereUniqueWithoutTeamInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberUpdateWithoutTeamInput_1.TeamMemberUpdateWithoutTeamInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamMemberUpdateWithoutTeamInput_1.TeamMemberUpdateWithoutTeamInput)
], TeamMemberUpsertWithWhereUniqueWithoutTeamInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberCreateWithoutTeamInput_1.TeamMemberCreateWithoutTeamInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamMemberCreateWithoutTeamInput_1.TeamMemberCreateWithoutTeamInput)
], TeamMemberUpsertWithWhereUniqueWithoutTeamInput.prototype, "create", void 0);
exports.TeamMemberUpsertWithWhereUniqueWithoutTeamInput = TeamMemberUpsertWithWhereUniqueWithoutTeamInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamMemberUpsertWithWhereUniqueWithoutTeamInput", {})
], TeamMemberUpsertWithWhereUniqueWithoutTeamInput);
