"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamMemberTeamIdUserIdCompoundUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TeamMemberTeamIdUserIdCompoundUniqueInput = class TeamMemberTeamIdUserIdCompoundUniqueInput {
};
exports.TeamMemberTeamIdUserIdCompoundUniqueInput = TeamMemberTeamIdUserIdCompoundUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TeamMemberTeamIdUserIdCompoundUniqueInput.prototype, "teamId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TeamMemberTeamIdUserIdCompoundUniqueInput.prototype, "userId", void 0);
exports.TeamMemberTeamIdUserIdCompoundUniqueInput = TeamMemberTeamIdUserIdCompoundUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamMemberTeamIdUserIdCompoundUniqueInput", {})
], TeamMemberTeamIdUserIdCompoundUniqueInput);
