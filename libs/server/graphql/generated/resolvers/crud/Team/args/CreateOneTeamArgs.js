"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneTeamArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamCreateInput_1 = require("../../../inputs/TeamCreateInput");
let CreateOneTeamArgs = class CreateOneTeamArgs {
};
exports.CreateOneTeamArgs = CreateOneTeamArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamCreateInput_1.TeamCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamCreateInput_1.TeamCreateInput)
], CreateOneTeamArgs.prototype, "data", void 0);
exports.CreateOneTeamArgs = CreateOneTeamArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneTeamArgs);
