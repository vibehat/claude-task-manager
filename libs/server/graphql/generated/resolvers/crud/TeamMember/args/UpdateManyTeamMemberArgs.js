"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyTeamMemberArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamMemberUpdateManyMutationInput_1 = require("../../../inputs/TeamMemberUpdateManyMutationInput");
const TeamMemberWhereInput_1 = require("../../../inputs/TeamMemberWhereInput");
let UpdateManyTeamMemberArgs = class UpdateManyTeamMemberArgs {
};
exports.UpdateManyTeamMemberArgs = UpdateManyTeamMemberArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberUpdateManyMutationInput_1.TeamMemberUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamMemberUpdateManyMutationInput_1.TeamMemberUpdateManyMutationInput)
], UpdateManyTeamMemberArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberWhereInput_1.TeamMemberWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamMemberWhereInput_1.TeamMemberWhereInput)
], UpdateManyTeamMemberArgs.prototype, "where", void 0);
exports.UpdateManyTeamMemberArgs = UpdateManyTeamMemberArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyTeamMemberArgs);
