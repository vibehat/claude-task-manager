"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamMemberCreateWithoutTeamInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateNestedOneWithoutTeamsInput_1 = require("../inputs/UserCreateNestedOneWithoutTeamsInput");
let TeamMemberCreateWithoutTeamInput = class TeamMemberCreateWithoutTeamInput {
};
exports.TeamMemberCreateWithoutTeamInput = TeamMemberCreateWithoutTeamInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamMemberCreateWithoutTeamInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutTeamsInput_1.UserCreateNestedOneWithoutTeamsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutTeamsInput_1.UserCreateNestedOneWithoutTeamsInput)
], TeamMemberCreateWithoutTeamInput.prototype, "user", void 0);
exports.TeamMemberCreateWithoutTeamInput = TeamMemberCreateWithoutTeamInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamMemberCreateWithoutTeamInput", {})
], TeamMemberCreateWithoutTeamInput);
