"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyTeamArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamWhereInput_1 = require("../../../inputs/TeamWhereInput");
let DeleteManyTeamArgs = class DeleteManyTeamArgs {
};
exports.DeleteManyTeamArgs = DeleteManyTeamArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamWhereInput_1.TeamWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamWhereInput_1.TeamWhereInput)
], DeleteManyTeamArgs.prototype, "where", void 0);
exports.DeleteManyTeamArgs = DeleteManyTeamArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyTeamArgs);
