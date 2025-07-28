"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamMemberCreateManyUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TeamMemberCreateManyUserInput = class TeamMemberCreateManyUserInput {
};
exports.TeamMemberCreateManyUserInput = TeamMemberCreateManyUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamMemberCreateManyUserInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TeamMemberCreateManyUserInput.prototype, "teamId", void 0);
exports.TeamMemberCreateManyUserInput = TeamMemberCreateManyUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamMemberCreateManyUserInput", {})
], TeamMemberCreateManyUserInput);
