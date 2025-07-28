"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyTeamArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamUpdateManyMutationInput_1 = require("../../../inputs/TeamUpdateManyMutationInput");
const TeamWhereInput_1 = require("../../../inputs/TeamWhereInput");
let UpdateManyTeamArgs = class UpdateManyTeamArgs {
};
exports.UpdateManyTeamArgs = UpdateManyTeamArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamUpdateManyMutationInput_1.TeamUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamUpdateManyMutationInput_1.TeamUpdateManyMutationInput)
], UpdateManyTeamArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamWhereInput_1.TeamWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamWhereInput_1.TeamWhereInput)
], UpdateManyTeamArgs.prototype, "where", void 0);
exports.UpdateManyTeamArgs = UpdateManyTeamArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyTeamArgs);
