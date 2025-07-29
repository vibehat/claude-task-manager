"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyTeamArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamOrderByWithRelationInput_1 = require("../../../inputs/TeamOrderByWithRelationInput");
const TeamWhereInput_1 = require("../../../inputs/TeamWhereInput");
const TeamWhereUniqueInput_1 = require("../../../inputs/TeamWhereUniqueInput");
const TeamScalarFieldEnum_1 = require("../../../../enums/TeamScalarFieldEnum");
let FindManyTeamArgs = class FindManyTeamArgs {
};
exports.FindManyTeamArgs = FindManyTeamArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamWhereInput_1.TeamWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamWhereInput_1.TeamWhereInput)
], FindManyTeamArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamOrderByWithRelationInput_1.TeamOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyTeamArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamWhereUniqueInput_1.TeamWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamWhereUniqueInput_1.TeamWhereUniqueInput)
], FindManyTeamArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyTeamArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyTeamArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamScalarFieldEnum_1.TeamScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyTeamArgs.prototype, "distinct", void 0);
exports.FindManyTeamArgs = FindManyTeamArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyTeamArgs);
