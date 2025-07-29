"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamProjectCreateManyTeamInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TeamProjectCreateManyTeamInput = class TeamProjectCreateManyTeamInput {
};
exports.TeamProjectCreateManyTeamInput = TeamProjectCreateManyTeamInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamProjectCreateManyTeamInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TeamProjectCreateManyTeamInput.prototype, "projectId", void 0);
exports.TeamProjectCreateManyTeamInput = TeamProjectCreateManyTeamInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamProjectCreateManyTeamInput", {})
], TeamProjectCreateManyTeamInput);
