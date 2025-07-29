"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTeamArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamOrderByWithRelationInput_1 = require("../../../inputs/TeamOrderByWithRelationInput");
const TeamWhereInput_1 = require("../../../inputs/TeamWhereInput");
const TeamWhereUniqueInput_1 = require("../../../inputs/TeamWhereUniqueInput");
let AggregateTeamArgs = class AggregateTeamArgs {
};
exports.AggregateTeamArgs = AggregateTeamArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamWhereInput_1.TeamWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamWhereInput_1.TeamWhereInput)
], AggregateTeamArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamOrderByWithRelationInput_1.TeamOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateTeamArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamWhereUniqueInput_1.TeamWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamWhereUniqueInput_1.TeamWhereUniqueInput)
], AggregateTeamArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateTeamArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateTeamArgs.prototype, "skip", void 0);
exports.AggregateTeamArgs = AggregateTeamArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateTeamArgs);
