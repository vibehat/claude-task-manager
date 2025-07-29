"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTeamProjectArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamProjectOrderByWithRelationInput_1 = require("../../../inputs/TeamProjectOrderByWithRelationInput");
const TeamProjectWhereInput_1 = require("../../../inputs/TeamProjectWhereInput");
const TeamProjectWhereUniqueInput_1 = require("../../../inputs/TeamProjectWhereUniqueInput");
let AggregateTeamProjectArgs = class AggregateTeamProjectArgs {
};
exports.AggregateTeamProjectArgs = AggregateTeamProjectArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamProjectWhereInput_1.TeamProjectWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamProjectWhereInput_1.TeamProjectWhereInput)
], AggregateTeamProjectArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamProjectOrderByWithRelationInput_1.TeamProjectOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateTeamProjectArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamProjectWhereUniqueInput_1.TeamProjectWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamProjectWhereUniqueInput_1.TeamProjectWhereUniqueInput)
], AggregateTeamProjectArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateTeamProjectArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateTeamProjectArgs.prototype, "skip", void 0);
exports.AggregateTeamProjectArgs = AggregateTeamProjectArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateTeamProjectArgs);
