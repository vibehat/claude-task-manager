"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstTeamOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamOrderByWithRelationInput_1 = require("../../../inputs/TeamOrderByWithRelationInput");
const TeamWhereInput_1 = require("../../../inputs/TeamWhereInput");
const TeamWhereUniqueInput_1 = require("../../../inputs/TeamWhereUniqueInput");
const TeamScalarFieldEnum_1 = require("../../../../enums/TeamScalarFieldEnum");
let FindFirstTeamOrThrowArgs = class FindFirstTeamOrThrowArgs {
};
exports.FindFirstTeamOrThrowArgs = FindFirstTeamOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamWhereInput_1.TeamWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamWhereInput_1.TeamWhereInput)
], FindFirstTeamOrThrowArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamOrderByWithRelationInput_1.TeamOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstTeamOrThrowArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamWhereUniqueInput_1.TeamWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamWhereUniqueInput_1.TeamWhereUniqueInput)
], FindFirstTeamOrThrowArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstTeamOrThrowArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstTeamOrThrowArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamScalarFieldEnum_1.TeamScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstTeamOrThrowArgs.prototype, "distinct", void 0);
exports.FindFirstTeamOrThrowArgs = FindFirstTeamOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstTeamOrThrowArgs);
