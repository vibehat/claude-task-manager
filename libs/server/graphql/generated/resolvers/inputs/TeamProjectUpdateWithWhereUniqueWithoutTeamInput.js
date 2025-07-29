"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamProjectUpdateWithWhereUniqueWithoutTeamInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamProjectUpdateWithoutTeamInput_1 = require("../inputs/TeamProjectUpdateWithoutTeamInput");
const TeamProjectWhereUniqueInput_1 = require("../inputs/TeamProjectWhereUniqueInput");
let TeamProjectUpdateWithWhereUniqueWithoutTeamInput = class TeamProjectUpdateWithWhereUniqueWithoutTeamInput {
};
exports.TeamProjectUpdateWithWhereUniqueWithoutTeamInput = TeamProjectUpdateWithWhereUniqueWithoutTeamInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamProjectWhereUniqueInput_1.TeamProjectWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamProjectWhereUniqueInput_1.TeamProjectWhereUniqueInput)
], TeamProjectUpdateWithWhereUniqueWithoutTeamInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamProjectUpdateWithoutTeamInput_1.TeamProjectUpdateWithoutTeamInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamProjectUpdateWithoutTeamInput_1.TeamProjectUpdateWithoutTeamInput)
], TeamProjectUpdateWithWhereUniqueWithoutTeamInput.prototype, "data", void 0);
exports.TeamProjectUpdateWithWhereUniqueWithoutTeamInput = TeamProjectUpdateWithWhereUniqueWithoutTeamInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamProjectUpdateWithWhereUniqueWithoutTeamInput", {})
], TeamProjectUpdateWithWhereUniqueWithoutTeamInput);
