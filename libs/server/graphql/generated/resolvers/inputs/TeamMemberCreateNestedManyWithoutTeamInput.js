"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamMemberCreateNestedManyWithoutTeamInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamMemberCreateManyTeamInputEnvelope_1 = require("../inputs/TeamMemberCreateManyTeamInputEnvelope");
const TeamMemberCreateOrConnectWithoutTeamInput_1 = require("../inputs/TeamMemberCreateOrConnectWithoutTeamInput");
const TeamMemberCreateWithoutTeamInput_1 = require("../inputs/TeamMemberCreateWithoutTeamInput");
const TeamMemberWhereUniqueInput_1 = require("../inputs/TeamMemberWhereUniqueInput");
let TeamMemberCreateNestedManyWithoutTeamInput = class TeamMemberCreateNestedManyWithoutTeamInput {
};
exports.TeamMemberCreateNestedManyWithoutTeamInput = TeamMemberCreateNestedManyWithoutTeamInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamMemberCreateWithoutTeamInput_1.TeamMemberCreateWithoutTeamInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamMemberCreateNestedManyWithoutTeamInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamMemberCreateOrConnectWithoutTeamInput_1.TeamMemberCreateOrConnectWithoutTeamInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamMemberCreateNestedManyWithoutTeamInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberCreateManyTeamInputEnvelope_1.TeamMemberCreateManyTeamInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamMemberCreateManyTeamInputEnvelope_1.TeamMemberCreateManyTeamInputEnvelope)
], TeamMemberCreateNestedManyWithoutTeamInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamMemberWhereUniqueInput_1.TeamMemberWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamMemberCreateNestedManyWithoutTeamInput.prototype, "connect", void 0);
exports.TeamMemberCreateNestedManyWithoutTeamInput = TeamMemberCreateNestedManyWithoutTeamInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamMemberCreateNestedManyWithoutTeamInput", {})
], TeamMemberCreateNestedManyWithoutTeamInput);
