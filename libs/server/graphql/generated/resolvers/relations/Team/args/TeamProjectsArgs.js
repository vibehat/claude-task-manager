"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamProjectsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamProjectOrderByWithRelationInput_1 = require("../../../inputs/TeamProjectOrderByWithRelationInput");
const TeamProjectWhereInput_1 = require("../../../inputs/TeamProjectWhereInput");
const TeamProjectWhereUniqueInput_1 = require("../../../inputs/TeamProjectWhereUniqueInput");
const TeamProjectScalarFieldEnum_1 = require("../../../../enums/TeamProjectScalarFieldEnum");
let TeamProjectsArgs = class TeamProjectsArgs {
};
exports.TeamProjectsArgs = TeamProjectsArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamProjectWhereInput_1.TeamProjectWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamProjectWhereInput_1.TeamProjectWhereInput)
], TeamProjectsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamProjectOrderByWithRelationInput_1.TeamProjectOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamProjectsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamProjectWhereUniqueInput_1.TeamProjectWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamProjectWhereUniqueInput_1.TeamProjectWhereUniqueInput)
], TeamProjectsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TeamProjectsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TeamProjectsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamProjectScalarFieldEnum_1.TeamProjectScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamProjectsArgs.prototype, "distinct", void 0);
exports.TeamProjectsArgs = TeamProjectsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], TeamProjectsArgs);
