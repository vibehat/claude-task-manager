"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyTeamProjectArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamProjectWhereInput_1 = require("../../../inputs/TeamProjectWhereInput");
let DeleteManyTeamProjectArgs = class DeleteManyTeamProjectArgs {
};
exports.DeleteManyTeamProjectArgs = DeleteManyTeamProjectArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamProjectWhereInput_1.TeamProjectWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamProjectWhereInput_1.TeamProjectWhereInput)
], DeleteManyTeamProjectArgs.prototype, "where", void 0);
exports.DeleteManyTeamProjectArgs = DeleteManyTeamProjectArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyTeamProjectArgs);
