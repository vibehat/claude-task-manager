"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyTeamMemberArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamMemberCreateManyInput_1 = require("../../../inputs/TeamMemberCreateManyInput");
let CreateManyTeamMemberArgs = class CreateManyTeamMemberArgs {
};
exports.CreateManyTeamMemberArgs = CreateManyTeamMemberArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamMemberCreateManyInput_1.TeamMemberCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyTeamMemberArgs.prototype, "data", void 0);
exports.CreateManyTeamMemberArgs = CreateManyTeamMemberArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyTeamMemberArgs);
