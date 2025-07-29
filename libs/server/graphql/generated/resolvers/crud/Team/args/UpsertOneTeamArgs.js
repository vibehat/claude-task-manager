"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneTeamArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamCreateInput_1 = require("../../../inputs/TeamCreateInput");
const TeamUpdateInput_1 = require("../../../inputs/TeamUpdateInput");
const TeamWhereUniqueInput_1 = require("../../../inputs/TeamWhereUniqueInput");
let UpsertOneTeamArgs = class UpsertOneTeamArgs {
};
exports.UpsertOneTeamArgs = UpsertOneTeamArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamWhereUniqueInput_1.TeamWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamWhereUniqueInput_1.TeamWhereUniqueInput)
], UpsertOneTeamArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamCreateInput_1.TeamCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamCreateInput_1.TeamCreateInput)
], UpsertOneTeamArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamUpdateInput_1.TeamUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamUpdateInput_1.TeamUpdateInput)
], UpsertOneTeamArgs.prototype, "update", void 0);
exports.UpsertOneTeamArgs = UpsertOneTeamArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneTeamArgs);
