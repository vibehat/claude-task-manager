"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstTeamMemberOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamMemberOrderByWithRelationInput_1 = require("../../../inputs/TeamMemberOrderByWithRelationInput");
const TeamMemberWhereInput_1 = require("../../../inputs/TeamMemberWhereInput");
const TeamMemberWhereUniqueInput_1 = require("../../../inputs/TeamMemberWhereUniqueInput");
const TeamMemberScalarFieldEnum_1 = require("../../../../enums/TeamMemberScalarFieldEnum");
let FindFirstTeamMemberOrThrowArgs = class FindFirstTeamMemberOrThrowArgs {
};
exports.FindFirstTeamMemberOrThrowArgs = FindFirstTeamMemberOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberWhereInput_1.TeamMemberWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamMemberWhereInput_1.TeamMemberWhereInput)
], FindFirstTeamMemberOrThrowArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamMemberOrderByWithRelationInput_1.TeamMemberOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstTeamMemberOrThrowArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberWhereUniqueInput_1.TeamMemberWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamMemberWhereUniqueInput_1.TeamMemberWhereUniqueInput)
], FindFirstTeamMemberOrThrowArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstTeamMemberOrThrowArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstTeamMemberOrThrowArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamMemberScalarFieldEnum_1.TeamMemberScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstTeamMemberOrThrowArgs.prototype, "distinct", void 0);
exports.FindFirstTeamMemberOrThrowArgs = FindFirstTeamMemberOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstTeamMemberOrThrowArgs);
