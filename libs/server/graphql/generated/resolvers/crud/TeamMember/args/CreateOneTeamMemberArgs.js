"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneTeamMemberArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamMemberCreateInput_1 = require("../../../inputs/TeamMemberCreateInput");
let CreateOneTeamMemberArgs = class CreateOneTeamMemberArgs {
};
exports.CreateOneTeamMemberArgs = CreateOneTeamMemberArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberCreateInput_1.TeamMemberCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamMemberCreateInput_1.TeamMemberCreateInput)
], CreateOneTeamMemberArgs.prototype, "data", void 0);
exports.CreateOneTeamMemberArgs = CreateOneTeamMemberArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneTeamMemberArgs);
