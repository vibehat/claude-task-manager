"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamMemberCreateOrConnectWithoutTeamInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamMemberCreateWithoutTeamInput_1 = require("../inputs/TeamMemberCreateWithoutTeamInput");
const TeamMemberWhereUniqueInput_1 = require("../inputs/TeamMemberWhereUniqueInput");
let TeamMemberCreateOrConnectWithoutTeamInput = class TeamMemberCreateOrConnectWithoutTeamInput {
};
exports.TeamMemberCreateOrConnectWithoutTeamInput = TeamMemberCreateOrConnectWithoutTeamInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberWhereUniqueInput_1.TeamMemberWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamMemberWhereUniqueInput_1.TeamMemberWhereUniqueInput)
], TeamMemberCreateOrConnectWithoutTeamInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberCreateWithoutTeamInput_1.TeamMemberCreateWithoutTeamInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamMemberCreateWithoutTeamInput_1.TeamMemberCreateWithoutTeamInput)
], TeamMemberCreateOrConnectWithoutTeamInput.prototype, "create", void 0);
exports.TeamMemberCreateOrConnectWithoutTeamInput = TeamMemberCreateOrConnectWithoutTeamInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamMemberCreateOrConnectWithoutTeamInput", {})
], TeamMemberCreateOrConnectWithoutTeamInput);
