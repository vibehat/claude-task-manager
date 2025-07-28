"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueTeamArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamWhereUniqueInput_1 = require("../../../inputs/TeamWhereUniqueInput");
let FindUniqueTeamArgs = class FindUniqueTeamArgs {
};
exports.FindUniqueTeamArgs = FindUniqueTeamArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamWhereUniqueInput_1.TeamWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamWhereUniqueInput_1.TeamWhereUniqueInput)
], FindUniqueTeamArgs.prototype, "where", void 0);
exports.FindUniqueTeamArgs = FindUniqueTeamArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueTeamArgs);
