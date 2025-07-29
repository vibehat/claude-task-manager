"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamCreateOrConnectWithoutCyclesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamCreateWithoutCyclesInput_1 = require("../inputs/TeamCreateWithoutCyclesInput");
const TeamWhereUniqueInput_1 = require("../inputs/TeamWhereUniqueInput");
let TeamCreateOrConnectWithoutCyclesInput = class TeamCreateOrConnectWithoutCyclesInput {
};
exports.TeamCreateOrConnectWithoutCyclesInput = TeamCreateOrConnectWithoutCyclesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamWhereUniqueInput_1.TeamWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamWhereUniqueInput_1.TeamWhereUniqueInput)
], TeamCreateOrConnectWithoutCyclesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamCreateWithoutCyclesInput_1.TeamCreateWithoutCyclesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamCreateWithoutCyclesInput_1.TeamCreateWithoutCyclesInput)
], TeamCreateOrConnectWithoutCyclesInput.prototype, "create", void 0);
exports.TeamCreateOrConnectWithoutCyclesInput = TeamCreateOrConnectWithoutCyclesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamCreateOrConnectWithoutCyclesInput", {})
], TeamCreateOrConnectWithoutCyclesInput);
