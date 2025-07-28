"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCountTeamsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamMemberWhereInput_1 = require("../../inputs/TeamMemberWhereInput");
let UserCountTeamsArgs = class UserCountTeamsArgs {
};
exports.UserCountTeamsArgs = UserCountTeamsArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberWhereInput_1.TeamMemberWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamMemberWhereInput_1.TeamMemberWhereInput)
], UserCountTeamsArgs.prototype, "where", void 0);
exports.UserCountTeamsArgs = UserCountTeamsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UserCountTeamsArgs);
