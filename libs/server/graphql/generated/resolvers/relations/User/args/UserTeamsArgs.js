"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTeamsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamMemberOrderByWithRelationInput_1 = require("../../../inputs/TeamMemberOrderByWithRelationInput");
const TeamMemberWhereInput_1 = require("../../../inputs/TeamMemberWhereInput");
const TeamMemberWhereUniqueInput_1 = require("../../../inputs/TeamMemberWhereUniqueInput");
const TeamMemberScalarFieldEnum_1 = require("../../../../enums/TeamMemberScalarFieldEnum");
let UserTeamsArgs = class UserTeamsArgs {
};
exports.UserTeamsArgs = UserTeamsArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberWhereInput_1.TeamMemberWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamMemberWhereInput_1.TeamMemberWhereInput)
], UserTeamsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamMemberOrderByWithRelationInput_1.TeamMemberOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserTeamsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberWhereUniqueInput_1.TeamMemberWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamMemberWhereUniqueInput_1.TeamMemberWhereUniqueInput)
], UserTeamsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserTeamsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserTeamsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamMemberScalarFieldEnum_1.TeamMemberScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserTeamsArgs.prototype, "distinct", void 0);
exports.UserTeamsArgs = UserTeamsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UserTeamsArgs);
