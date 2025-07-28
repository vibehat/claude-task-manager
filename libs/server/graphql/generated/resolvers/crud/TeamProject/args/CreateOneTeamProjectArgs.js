"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneTeamProjectArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamProjectCreateInput_1 = require("../../../inputs/TeamProjectCreateInput");
let CreateOneTeamProjectArgs = class CreateOneTeamProjectArgs {
};
exports.CreateOneTeamProjectArgs = CreateOneTeamProjectArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamProjectCreateInput_1.TeamProjectCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamProjectCreateInput_1.TeamProjectCreateInput)
], CreateOneTeamProjectArgs.prototype, "data", void 0);
exports.CreateOneTeamProjectArgs = CreateOneTeamProjectArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneTeamProjectArgs);
