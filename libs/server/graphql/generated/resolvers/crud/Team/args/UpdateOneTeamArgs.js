"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneTeamArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamUpdateInput_1 = require("../../../inputs/TeamUpdateInput");
const TeamWhereUniqueInput_1 = require("../../../inputs/TeamWhereUniqueInput");
let UpdateOneTeamArgs = class UpdateOneTeamArgs {
};
exports.UpdateOneTeamArgs = UpdateOneTeamArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamUpdateInput_1.TeamUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamUpdateInput_1.TeamUpdateInput)
], UpdateOneTeamArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamWhereUniqueInput_1.TeamWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamWhereUniqueInput_1.TeamWhereUniqueInput)
], UpdateOneTeamArgs.prototype, "where", void 0);
exports.UpdateOneTeamArgs = UpdateOneTeamArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneTeamArgs);
