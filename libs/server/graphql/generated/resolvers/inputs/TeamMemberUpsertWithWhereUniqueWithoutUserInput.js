"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamMemberUpsertWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamMemberCreateWithoutUserInput_1 = require("../inputs/TeamMemberCreateWithoutUserInput");
const TeamMemberUpdateWithoutUserInput_1 = require("../inputs/TeamMemberUpdateWithoutUserInput");
const TeamMemberWhereUniqueInput_1 = require("../inputs/TeamMemberWhereUniqueInput");
let TeamMemberUpsertWithWhereUniqueWithoutUserInput = class TeamMemberUpsertWithWhereUniqueWithoutUserInput {
};
exports.TeamMemberUpsertWithWhereUniqueWithoutUserInput = TeamMemberUpsertWithWhereUniqueWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberWhereUniqueInput_1.TeamMemberWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamMemberWhereUniqueInput_1.TeamMemberWhereUniqueInput)
], TeamMemberUpsertWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberUpdateWithoutUserInput_1.TeamMemberUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamMemberUpdateWithoutUserInput_1.TeamMemberUpdateWithoutUserInput)
], TeamMemberUpsertWithWhereUniqueWithoutUserInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberCreateWithoutUserInput_1.TeamMemberCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamMemberCreateWithoutUserInput_1.TeamMemberCreateWithoutUserInput)
], TeamMemberUpsertWithWhereUniqueWithoutUserInput.prototype, "create", void 0);
exports.TeamMemberUpsertWithWhereUniqueWithoutUserInput = TeamMemberUpsertWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamMemberUpsertWithWhereUniqueWithoutUserInput", {})
], TeamMemberUpsertWithWhereUniqueWithoutUserInput);
