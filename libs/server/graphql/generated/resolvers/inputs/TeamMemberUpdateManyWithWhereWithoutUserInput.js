"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamMemberUpdateManyWithWhereWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamMemberScalarWhereInput_1 = require("../inputs/TeamMemberScalarWhereInput");
const TeamMemberUpdateManyMutationInput_1 = require("../inputs/TeamMemberUpdateManyMutationInput");
let TeamMemberUpdateManyWithWhereWithoutUserInput = class TeamMemberUpdateManyWithWhereWithoutUserInput {
};
exports.TeamMemberUpdateManyWithWhereWithoutUserInput = TeamMemberUpdateManyWithWhereWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberScalarWhereInput_1.TeamMemberScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamMemberScalarWhereInput_1.TeamMemberScalarWhereInput)
], TeamMemberUpdateManyWithWhereWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberUpdateManyMutationInput_1.TeamMemberUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamMemberUpdateManyMutationInput_1.TeamMemberUpdateManyMutationInput)
], TeamMemberUpdateManyWithWhereWithoutUserInput.prototype, "data", void 0);
exports.TeamMemberUpdateManyWithWhereWithoutUserInput = TeamMemberUpdateManyWithWhereWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamMemberUpdateManyWithWhereWithoutUserInput", {})
], TeamMemberUpdateManyWithWhereWithoutUserInput);
