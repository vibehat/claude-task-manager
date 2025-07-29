"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamProjectUpdateManyWithoutTeamNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamProjectCreateManyTeamInputEnvelope_1 = require("../inputs/TeamProjectCreateManyTeamInputEnvelope");
const TeamProjectCreateOrConnectWithoutTeamInput_1 = require("../inputs/TeamProjectCreateOrConnectWithoutTeamInput");
const TeamProjectCreateWithoutTeamInput_1 = require("../inputs/TeamProjectCreateWithoutTeamInput");
const TeamProjectScalarWhereInput_1 = require("../inputs/TeamProjectScalarWhereInput");
const TeamProjectUpdateManyWithWhereWithoutTeamInput_1 = require("../inputs/TeamProjectUpdateManyWithWhereWithoutTeamInput");
const TeamProjectUpdateWithWhereUniqueWithoutTeamInput_1 = require("../inputs/TeamProjectUpdateWithWhereUniqueWithoutTeamInput");
const TeamProjectUpsertWithWhereUniqueWithoutTeamInput_1 = require("../inputs/TeamProjectUpsertWithWhereUniqueWithoutTeamInput");
const TeamProjectWhereUniqueInput_1 = require("../inputs/TeamProjectWhereUniqueInput");
let TeamProjectUpdateManyWithoutTeamNestedInput = class TeamProjectUpdateManyWithoutTeamNestedInput {
};
exports.TeamProjectUpdateManyWithoutTeamNestedInput = TeamProjectUpdateManyWithoutTeamNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamProjectCreateWithoutTeamInput_1.TeamProjectCreateWithoutTeamInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamProjectUpdateManyWithoutTeamNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamProjectCreateOrConnectWithoutTeamInput_1.TeamProjectCreateOrConnectWithoutTeamInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamProjectUpdateManyWithoutTeamNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamProjectUpsertWithWhereUniqueWithoutTeamInput_1.TeamProjectUpsertWithWhereUniqueWithoutTeamInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamProjectUpdateManyWithoutTeamNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamProjectCreateManyTeamInputEnvelope_1.TeamProjectCreateManyTeamInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamProjectCreateManyTeamInputEnvelope_1.TeamProjectCreateManyTeamInputEnvelope)
], TeamProjectUpdateManyWithoutTeamNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamProjectWhereUniqueInput_1.TeamProjectWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamProjectUpdateManyWithoutTeamNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamProjectWhereUniqueInput_1.TeamProjectWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamProjectUpdateManyWithoutTeamNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamProjectWhereUniqueInput_1.TeamProjectWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamProjectUpdateManyWithoutTeamNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamProjectWhereUniqueInput_1.TeamProjectWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamProjectUpdateManyWithoutTeamNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamProjectUpdateWithWhereUniqueWithoutTeamInput_1.TeamProjectUpdateWithWhereUniqueWithoutTeamInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamProjectUpdateManyWithoutTeamNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamProjectUpdateManyWithWhereWithoutTeamInput_1.TeamProjectUpdateManyWithWhereWithoutTeamInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamProjectUpdateManyWithoutTeamNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamProjectScalarWhereInput_1.TeamProjectScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamProjectUpdateManyWithoutTeamNestedInput.prototype, "deleteMany", void 0);
exports.TeamProjectUpdateManyWithoutTeamNestedInput = TeamProjectUpdateManyWithoutTeamNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamProjectUpdateManyWithoutTeamNestedInput", {})
], TeamProjectUpdateManyWithoutTeamNestedInput);
