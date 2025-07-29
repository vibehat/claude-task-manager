"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyTeamProjectArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamProjectUpdateManyMutationInput_1 = require("../../../inputs/TeamProjectUpdateManyMutationInput");
const TeamProjectWhereInput_1 = require("../../../inputs/TeamProjectWhereInput");
let UpdateManyTeamProjectArgs = class UpdateManyTeamProjectArgs {
};
exports.UpdateManyTeamProjectArgs = UpdateManyTeamProjectArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamProjectUpdateManyMutationInput_1.TeamProjectUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamProjectUpdateManyMutationInput_1.TeamProjectUpdateManyMutationInput)
], UpdateManyTeamProjectArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamProjectWhereInput_1.TeamProjectWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamProjectWhereInput_1.TeamProjectWhereInput)
], UpdateManyTeamProjectArgs.prototype, "where", void 0);
exports.UpdateManyTeamProjectArgs = UpdateManyTeamProjectArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyTeamProjectArgs);
