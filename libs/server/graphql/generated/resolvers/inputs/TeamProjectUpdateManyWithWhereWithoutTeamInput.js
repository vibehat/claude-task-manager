"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamProjectUpdateManyWithWhereWithoutTeamInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamProjectScalarWhereInput_1 = require("../inputs/TeamProjectScalarWhereInput");
const TeamProjectUpdateManyMutationInput_1 = require("../inputs/TeamProjectUpdateManyMutationInput");
let TeamProjectUpdateManyWithWhereWithoutTeamInput = class TeamProjectUpdateManyWithWhereWithoutTeamInput {
};
exports.TeamProjectUpdateManyWithWhereWithoutTeamInput = TeamProjectUpdateManyWithWhereWithoutTeamInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamProjectScalarWhereInput_1.TeamProjectScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamProjectScalarWhereInput_1.TeamProjectScalarWhereInput)
], TeamProjectUpdateManyWithWhereWithoutTeamInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamProjectUpdateManyMutationInput_1.TeamProjectUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamProjectUpdateManyMutationInput_1.TeamProjectUpdateManyMutationInput)
], TeamProjectUpdateManyWithWhereWithoutTeamInput.prototype, "data", void 0);
exports.TeamProjectUpdateManyWithWhereWithoutTeamInput = TeamProjectUpdateManyWithWhereWithoutTeamInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamProjectUpdateManyWithWhereWithoutTeamInput", {})
], TeamProjectUpdateManyWithWhereWithoutTeamInput);
