"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamProjectTeamIdProjectIdCompoundUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TeamProjectTeamIdProjectIdCompoundUniqueInput = class TeamProjectTeamIdProjectIdCompoundUniqueInput {
};
exports.TeamProjectTeamIdProjectIdCompoundUniqueInput = TeamProjectTeamIdProjectIdCompoundUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TeamProjectTeamIdProjectIdCompoundUniqueInput.prototype, "teamId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TeamProjectTeamIdProjectIdCompoundUniqueInput.prototype, "projectId", void 0);
exports.TeamProjectTeamIdProjectIdCompoundUniqueInput = TeamProjectTeamIdProjectIdCompoundUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamProjectTeamIdProjectIdCompoundUniqueInput", {})
], TeamProjectTeamIdProjectIdCompoundUniqueInput);
