"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneTeamArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamWhereUniqueInput_1 = require("../../../inputs/TeamWhereUniqueInput");
let DeleteOneTeamArgs = class DeleteOneTeamArgs {
};
exports.DeleteOneTeamArgs = DeleteOneTeamArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamWhereUniqueInput_1.TeamWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamWhereUniqueInput_1.TeamWhereUniqueInput)
], DeleteOneTeamArgs.prototype, "where", void 0);
exports.DeleteOneTeamArgs = DeleteOneTeamArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneTeamArgs);
