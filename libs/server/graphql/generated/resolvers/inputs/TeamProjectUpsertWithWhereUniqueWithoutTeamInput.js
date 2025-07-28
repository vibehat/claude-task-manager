"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamProjectUpsertWithWhereUniqueWithoutTeamInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamProjectCreateWithoutTeamInput_1 = require("../inputs/TeamProjectCreateWithoutTeamInput");
const TeamProjectUpdateWithoutTeamInput_1 = require("../inputs/TeamProjectUpdateWithoutTeamInput");
const TeamProjectWhereUniqueInput_1 = require("../inputs/TeamProjectWhereUniqueInput");
let TeamProjectUpsertWithWhereUniqueWithoutTeamInput = class TeamProjectUpsertWithWhereUniqueWithoutTeamInput {
};
exports.TeamProjectUpsertWithWhereUniqueWithoutTeamInput = TeamProjectUpsertWithWhereUniqueWithoutTeamInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamProjectWhereUniqueInput_1.TeamProjectWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamProjectWhereUniqueInput_1.TeamProjectWhereUniqueInput)
], TeamProjectUpsertWithWhereUniqueWithoutTeamInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamProjectUpdateWithoutTeamInput_1.TeamProjectUpdateWithoutTeamInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamProjectUpdateWithoutTeamInput_1.TeamProjectUpdateWithoutTeamInput)
], TeamProjectUpsertWithWhereUniqueWithoutTeamInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamProjectCreateWithoutTeamInput_1.TeamProjectCreateWithoutTeamInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamProjectCreateWithoutTeamInput_1.TeamProjectCreateWithoutTeamInput)
], TeamProjectUpsertWithWhereUniqueWithoutTeamInput.prototype, "create", void 0);
exports.TeamProjectUpsertWithWhereUniqueWithoutTeamInput = TeamProjectUpsertWithWhereUniqueWithoutTeamInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamProjectUpsertWithWhereUniqueWithoutTeamInput", {})
], TeamProjectUpsertWithWhereUniqueWithoutTeamInput);
