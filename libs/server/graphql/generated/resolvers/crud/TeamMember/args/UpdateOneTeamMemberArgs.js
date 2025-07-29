"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneTeamMemberArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamMemberUpdateInput_1 = require("../../../inputs/TeamMemberUpdateInput");
const TeamMemberWhereUniqueInput_1 = require("../../../inputs/TeamMemberWhereUniqueInput");
let UpdateOneTeamMemberArgs = class UpdateOneTeamMemberArgs {
};
exports.UpdateOneTeamMemberArgs = UpdateOneTeamMemberArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberUpdateInput_1.TeamMemberUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamMemberUpdateInput_1.TeamMemberUpdateInput)
], UpdateOneTeamMemberArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberWhereUniqueInput_1.TeamMemberWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamMemberWhereUniqueInput_1.TeamMemberWhereUniqueInput)
], UpdateOneTeamMemberArgs.prototype, "where", void 0);
exports.UpdateOneTeamMemberArgs = UpdateOneTeamMemberArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneTeamMemberArgs);
