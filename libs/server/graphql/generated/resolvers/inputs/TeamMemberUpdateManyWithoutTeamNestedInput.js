"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamMemberUpdateManyWithoutTeamNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamMemberCreateManyTeamInputEnvelope_1 = require("../inputs/TeamMemberCreateManyTeamInputEnvelope");
const TeamMemberCreateOrConnectWithoutTeamInput_1 = require("../inputs/TeamMemberCreateOrConnectWithoutTeamInput");
const TeamMemberCreateWithoutTeamInput_1 = require("../inputs/TeamMemberCreateWithoutTeamInput");
const TeamMemberScalarWhereInput_1 = require("../inputs/TeamMemberScalarWhereInput");
const TeamMemberUpdateManyWithWhereWithoutTeamInput_1 = require("../inputs/TeamMemberUpdateManyWithWhereWithoutTeamInput");
const TeamMemberUpdateWithWhereUniqueWithoutTeamInput_1 = require("../inputs/TeamMemberUpdateWithWhereUniqueWithoutTeamInput");
const TeamMemberUpsertWithWhereUniqueWithoutTeamInput_1 = require("../inputs/TeamMemberUpsertWithWhereUniqueWithoutTeamInput");
const TeamMemberWhereUniqueInput_1 = require("../inputs/TeamMemberWhereUniqueInput");
let TeamMemberUpdateManyWithoutTeamNestedInput = class TeamMemberUpdateManyWithoutTeamNestedInput {
};
exports.TeamMemberUpdateManyWithoutTeamNestedInput = TeamMemberUpdateManyWithoutTeamNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamMemberCreateWithoutTeamInput_1.TeamMemberCreateWithoutTeamInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamMemberUpdateManyWithoutTeamNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamMemberCreateOrConnectWithoutTeamInput_1.TeamMemberCreateOrConnectWithoutTeamInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamMemberUpdateManyWithoutTeamNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamMemberUpsertWithWhereUniqueWithoutTeamInput_1.TeamMemberUpsertWithWhereUniqueWithoutTeamInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamMemberUpdateManyWithoutTeamNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberCreateManyTeamInputEnvelope_1.TeamMemberCreateManyTeamInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamMemberCreateManyTeamInputEnvelope_1.TeamMemberCreateManyTeamInputEnvelope)
], TeamMemberUpdateManyWithoutTeamNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamMemberWhereUniqueInput_1.TeamMemberWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamMemberUpdateManyWithoutTeamNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamMemberWhereUniqueInput_1.TeamMemberWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamMemberUpdateManyWithoutTeamNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamMemberWhereUniqueInput_1.TeamMemberWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamMemberUpdateManyWithoutTeamNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamMemberWhereUniqueInput_1.TeamMemberWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamMemberUpdateManyWithoutTeamNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamMemberUpdateWithWhereUniqueWithoutTeamInput_1.TeamMemberUpdateWithWhereUniqueWithoutTeamInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamMemberUpdateManyWithoutTeamNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamMemberUpdateManyWithWhereWithoutTeamInput_1.TeamMemberUpdateManyWithWhereWithoutTeamInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamMemberUpdateManyWithoutTeamNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamMemberScalarWhereInput_1.TeamMemberScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamMemberUpdateManyWithoutTeamNestedInput.prototype, "deleteMany", void 0);
exports.TeamMemberUpdateManyWithoutTeamNestedInput = TeamMemberUpdateManyWithoutTeamNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamMemberUpdateManyWithoutTeamNestedInput", {})
], TeamMemberUpdateManyWithoutTeamNestedInput);
