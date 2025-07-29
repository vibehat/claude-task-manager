"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamMemberUpdateManyWithWhereWithoutTeamInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamMemberScalarWhereInput_1 = require("../inputs/TeamMemberScalarWhereInput");
const TeamMemberUpdateManyMutationInput_1 = require("../inputs/TeamMemberUpdateManyMutationInput");
let TeamMemberUpdateManyWithWhereWithoutTeamInput = class TeamMemberUpdateManyWithWhereWithoutTeamInput {
};
exports.TeamMemberUpdateManyWithWhereWithoutTeamInput = TeamMemberUpdateManyWithWhereWithoutTeamInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberScalarWhereInput_1.TeamMemberScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamMemberScalarWhereInput_1.TeamMemberScalarWhereInput)
], TeamMemberUpdateManyWithWhereWithoutTeamInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberUpdateManyMutationInput_1.TeamMemberUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamMemberUpdateManyMutationInput_1.TeamMemberUpdateManyMutationInput)
], TeamMemberUpdateManyWithWhereWithoutTeamInput.prototype, "data", void 0);
exports.TeamMemberUpdateManyWithWhereWithoutTeamInput = TeamMemberUpdateManyWithWhereWithoutTeamInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamMemberUpdateManyWithWhereWithoutTeamInput", {})
], TeamMemberUpdateManyWithWhereWithoutTeamInput);
