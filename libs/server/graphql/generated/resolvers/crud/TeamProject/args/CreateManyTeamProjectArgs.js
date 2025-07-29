"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyTeamProjectArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamProjectCreateManyInput_1 = require("../../../inputs/TeamProjectCreateManyInput");
let CreateManyTeamProjectArgs = class CreateManyTeamProjectArgs {
};
exports.CreateManyTeamProjectArgs = CreateManyTeamProjectArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamProjectCreateManyInput_1.TeamProjectCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyTeamProjectArgs.prototype, "data", void 0);
exports.CreateManyTeamProjectArgs = CreateManyTeamProjectArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyTeamProjectArgs);
