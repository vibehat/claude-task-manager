"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstTeamArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamOrderByWithRelationInput_1 = require("../../../inputs/TeamOrderByWithRelationInput");
const TeamWhereInput_1 = require("../../../inputs/TeamWhereInput");
const TeamWhereUniqueInput_1 = require("../../../inputs/TeamWhereUniqueInput");
const TeamScalarFieldEnum_1 = require("../../../../enums/TeamScalarFieldEnum");
let FindFirstTeamArgs = class FindFirstTeamArgs {
};
exports.FindFirstTeamArgs = FindFirstTeamArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamWhereInput_1.TeamWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamWhereInput_1.TeamWhereInput)
], FindFirstTeamArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamOrderByWithRelationInput_1.TeamOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstTeamArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamWhereUniqueInput_1.TeamWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamWhereUniqueInput_1.TeamWhereUniqueInput)
], FindFirstTeamArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstTeamArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstTeamArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamScalarFieldEnum_1.TeamScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstTeamArgs.prototype, "distinct", void 0);
exports.FindFirstTeamArgs = FindFirstTeamArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstTeamArgs);
