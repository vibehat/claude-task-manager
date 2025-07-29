"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamMemberUpdateWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamMemberUpdateWithoutUserInput_1 = require("../inputs/TeamMemberUpdateWithoutUserInput");
const TeamMemberWhereUniqueInput_1 = require("../inputs/TeamMemberWhereUniqueInput");
let TeamMemberUpdateWithWhereUniqueWithoutUserInput = class TeamMemberUpdateWithWhereUniqueWithoutUserInput {
};
exports.TeamMemberUpdateWithWhereUniqueWithoutUserInput = TeamMemberUpdateWithWhereUniqueWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberWhereUniqueInput_1.TeamMemberWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamMemberWhereUniqueInput_1.TeamMemberWhereUniqueInput)
], TeamMemberUpdateWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberUpdateWithoutUserInput_1.TeamMemberUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamMemberUpdateWithoutUserInput_1.TeamMemberUpdateWithoutUserInput)
], TeamMemberUpdateWithWhereUniqueWithoutUserInput.prototype, "data", void 0);
exports.TeamMemberUpdateWithWhereUniqueWithoutUserInput = TeamMemberUpdateWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamMemberUpdateWithWhereUniqueWithoutUserInput", {})
], TeamMemberUpdateWithWhereUniqueWithoutUserInput);
