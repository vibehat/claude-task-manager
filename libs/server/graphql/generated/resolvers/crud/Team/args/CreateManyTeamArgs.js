"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyTeamArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamCreateManyInput_1 = require("../../../inputs/TeamCreateManyInput");
let CreateManyTeamArgs = class CreateManyTeamArgs {
};
exports.CreateManyTeamArgs = CreateManyTeamArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamCreateManyInput_1.TeamCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyTeamArgs.prototype, "data", void 0);
exports.CreateManyTeamArgs = CreateManyTeamArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyTeamArgs);
