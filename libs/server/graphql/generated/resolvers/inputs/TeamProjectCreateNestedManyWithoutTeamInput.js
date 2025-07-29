"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamProjectCreateNestedManyWithoutTeamInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamProjectCreateManyTeamInputEnvelope_1 = require("../inputs/TeamProjectCreateManyTeamInputEnvelope");
const TeamProjectCreateOrConnectWithoutTeamInput_1 = require("../inputs/TeamProjectCreateOrConnectWithoutTeamInput");
const TeamProjectCreateWithoutTeamInput_1 = require("../inputs/TeamProjectCreateWithoutTeamInput");
const TeamProjectWhereUniqueInput_1 = require("../inputs/TeamProjectWhereUniqueInput");
let TeamProjectCreateNestedManyWithoutTeamInput = class TeamProjectCreateNestedManyWithoutTeamInput {
};
exports.TeamProjectCreateNestedManyWithoutTeamInput = TeamProjectCreateNestedManyWithoutTeamInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamProjectCreateWithoutTeamInput_1.TeamProjectCreateWithoutTeamInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamProjectCreateNestedManyWithoutTeamInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamProjectCreateOrConnectWithoutTeamInput_1.TeamProjectCreateOrConnectWithoutTeamInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamProjectCreateNestedManyWithoutTeamInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamProjectCreateManyTeamInputEnvelope_1.TeamProjectCreateManyTeamInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamProjectCreateManyTeamInputEnvelope_1.TeamProjectCreateManyTeamInputEnvelope)
], TeamProjectCreateNestedManyWithoutTeamInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamProjectWhereUniqueInput_1.TeamProjectWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamProjectCreateNestedManyWithoutTeamInput.prototype, "connect", void 0);
exports.TeamProjectCreateNestedManyWithoutTeamInput = TeamProjectCreateNestedManyWithoutTeamInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamProjectCreateNestedManyWithoutTeamInput", {})
], TeamProjectCreateNestedManyWithoutTeamInput);
