"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstTeamMemberArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamMemberOrderByWithRelationInput_1 = require("../../../inputs/TeamMemberOrderByWithRelationInput");
const TeamMemberWhereInput_1 = require("../../../inputs/TeamMemberWhereInput");
const TeamMemberWhereUniqueInput_1 = require("../../../inputs/TeamMemberWhereUniqueInput");
const TeamMemberScalarFieldEnum_1 = require("../../../../enums/TeamMemberScalarFieldEnum");
let FindFirstTeamMemberArgs = class FindFirstTeamMemberArgs {
};
exports.FindFirstTeamMemberArgs = FindFirstTeamMemberArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberWhereInput_1.TeamMemberWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamMemberWhereInput_1.TeamMemberWhereInput)
], FindFirstTeamMemberArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamMemberOrderByWithRelationInput_1.TeamMemberOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstTeamMemberArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberWhereUniqueInput_1.TeamMemberWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamMemberWhereUniqueInput_1.TeamMemberWhereUniqueInput)
], FindFirstTeamMemberArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstTeamMemberArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstTeamMemberArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamMemberScalarFieldEnum_1.TeamMemberScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstTeamMemberArgs.prototype, "distinct", void 0);
exports.FindFirstTeamMemberArgs = FindFirstTeamMemberArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstTeamMemberArgs);
