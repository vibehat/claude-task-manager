"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamMemberCreateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamCreateNestedOneWithoutMembersInput_1 = require("../inputs/TeamCreateNestedOneWithoutMembersInput");
let TeamMemberCreateWithoutUserInput = class TeamMemberCreateWithoutUserInput {
};
exports.TeamMemberCreateWithoutUserInput = TeamMemberCreateWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamMemberCreateWithoutUserInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamCreateNestedOneWithoutMembersInput_1.TeamCreateNestedOneWithoutMembersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamCreateNestedOneWithoutMembersInput_1.TeamCreateNestedOneWithoutMembersInput)
], TeamMemberCreateWithoutUserInput.prototype, "team", void 0);
exports.TeamMemberCreateWithoutUserInput = TeamMemberCreateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamMemberCreateWithoutUserInput", {})
], TeamMemberCreateWithoutUserInput);
