"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneTeamProjectArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamProjectWhereUniqueInput_1 = require("../../../inputs/TeamProjectWhereUniqueInput");
let DeleteOneTeamProjectArgs = class DeleteOneTeamProjectArgs {
};
exports.DeleteOneTeamProjectArgs = DeleteOneTeamProjectArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamProjectWhereUniqueInput_1.TeamProjectWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamProjectWhereUniqueInput_1.TeamProjectWhereUniqueInput)
], DeleteOneTeamProjectArgs.prototype, "where", void 0);
exports.DeleteOneTeamProjectArgs = DeleteOneTeamProjectArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneTeamProjectArgs);
