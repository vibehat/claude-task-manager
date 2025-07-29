"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneTeamProjectArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamProjectUpdateInput_1 = require("../../../inputs/TeamProjectUpdateInput");
const TeamProjectWhereUniqueInput_1 = require("../../../inputs/TeamProjectWhereUniqueInput");
let UpdateOneTeamProjectArgs = class UpdateOneTeamProjectArgs {
};
exports.UpdateOneTeamProjectArgs = UpdateOneTeamProjectArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamProjectUpdateInput_1.TeamProjectUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamProjectUpdateInput_1.TeamProjectUpdateInput)
], UpdateOneTeamProjectArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamProjectWhereUniqueInput_1.TeamProjectWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamProjectWhereUniqueInput_1.TeamProjectWhereUniqueInput)
], UpdateOneTeamProjectArgs.prototype, "where", void 0);
exports.UpdateOneTeamProjectArgs = UpdateOneTeamProjectArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneTeamProjectArgs);
