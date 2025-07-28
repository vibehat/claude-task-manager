"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamProjectCreateOrConnectWithoutTeamInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamProjectCreateWithoutTeamInput_1 = require("../inputs/TeamProjectCreateWithoutTeamInput");
const TeamProjectWhereUniqueInput_1 = require("../inputs/TeamProjectWhereUniqueInput");
let TeamProjectCreateOrConnectWithoutTeamInput = class TeamProjectCreateOrConnectWithoutTeamInput {
};
exports.TeamProjectCreateOrConnectWithoutTeamInput = TeamProjectCreateOrConnectWithoutTeamInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamProjectWhereUniqueInput_1.TeamProjectWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamProjectWhereUniqueInput_1.TeamProjectWhereUniqueInput)
], TeamProjectCreateOrConnectWithoutTeamInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamProjectCreateWithoutTeamInput_1.TeamProjectCreateWithoutTeamInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamProjectCreateWithoutTeamInput_1.TeamProjectCreateWithoutTeamInput)
], TeamProjectCreateOrConnectWithoutTeamInput.prototype, "create", void 0);
exports.TeamProjectCreateOrConnectWithoutTeamInput = TeamProjectCreateOrConnectWithoutTeamInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamProjectCreateOrConnectWithoutTeamInput", {})
], TeamProjectCreateOrConnectWithoutTeamInput);
