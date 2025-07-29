"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneTeamProjectArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamProjectCreateInput_1 = require("../../../inputs/TeamProjectCreateInput");
const TeamProjectUpdateInput_1 = require("../../../inputs/TeamProjectUpdateInput");
const TeamProjectWhereUniqueInput_1 = require("../../../inputs/TeamProjectWhereUniqueInput");
let UpsertOneTeamProjectArgs = class UpsertOneTeamProjectArgs {
};
exports.UpsertOneTeamProjectArgs = UpsertOneTeamProjectArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamProjectWhereUniqueInput_1.TeamProjectWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamProjectWhereUniqueInput_1.TeamProjectWhereUniqueInput)
], UpsertOneTeamProjectArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamProjectCreateInput_1.TeamProjectCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamProjectCreateInput_1.TeamProjectCreateInput)
], UpsertOneTeamProjectArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamProjectUpdateInput_1.TeamProjectUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamProjectUpdateInput_1.TeamProjectUpdateInput)
], UpsertOneTeamProjectArgs.prototype, "update", void 0);
exports.UpsertOneTeamProjectArgs = UpsertOneTeamProjectArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneTeamProjectArgs);
