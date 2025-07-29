"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamMemberCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamCreateNestedOneWithoutMembersInput_1 = require("../inputs/TeamCreateNestedOneWithoutMembersInput");
const UserCreateNestedOneWithoutTeamsInput_1 = require("../inputs/UserCreateNestedOneWithoutTeamsInput");
let TeamMemberCreateInput = class TeamMemberCreateInput {
};
exports.TeamMemberCreateInput = TeamMemberCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamMemberCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamCreateNestedOneWithoutMembersInput_1.TeamCreateNestedOneWithoutMembersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamCreateNestedOneWithoutMembersInput_1.TeamCreateNestedOneWithoutMembersInput)
], TeamMemberCreateInput.prototype, "team", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutTeamsInput_1.UserCreateNestedOneWithoutTeamsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutTeamsInput_1.UserCreateNestedOneWithoutTeamsInput)
], TeamMemberCreateInput.prototype, "user", void 0);
exports.TeamMemberCreateInput = TeamMemberCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamMemberCreateInput", {})
], TeamMemberCreateInput);
