"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamMemberCreateManyTeamInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TeamMemberCreateManyTeamInput = class TeamMemberCreateManyTeamInput {
};
exports.TeamMemberCreateManyTeamInput = TeamMemberCreateManyTeamInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamMemberCreateManyTeamInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TeamMemberCreateManyTeamInput.prototype, "userId", void 0);
exports.TeamMemberCreateManyTeamInput = TeamMemberCreateManyTeamInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamMemberCreateManyTeamInput", {})
], TeamMemberCreateManyTeamInput);
