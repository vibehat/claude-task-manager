"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamCreateNestedOneWithoutCyclesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamCreateOrConnectWithoutCyclesInput_1 = require("../inputs/TeamCreateOrConnectWithoutCyclesInput");
const TeamCreateWithoutCyclesInput_1 = require("../inputs/TeamCreateWithoutCyclesInput");
const TeamWhereUniqueInput_1 = require("../inputs/TeamWhereUniqueInput");
let TeamCreateNestedOneWithoutCyclesInput = class TeamCreateNestedOneWithoutCyclesInput {
};
exports.TeamCreateNestedOneWithoutCyclesInput = TeamCreateNestedOneWithoutCyclesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamCreateWithoutCyclesInput_1.TeamCreateWithoutCyclesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamCreateWithoutCyclesInput_1.TeamCreateWithoutCyclesInput)
], TeamCreateNestedOneWithoutCyclesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamCreateOrConnectWithoutCyclesInput_1.TeamCreateOrConnectWithoutCyclesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamCreateOrConnectWithoutCyclesInput_1.TeamCreateOrConnectWithoutCyclesInput)
], TeamCreateNestedOneWithoutCyclesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamWhereUniqueInput_1.TeamWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamWhereUniqueInput_1.TeamWhereUniqueInput)
], TeamCreateNestedOneWithoutCyclesInput.prototype, "connect", void 0);
exports.TeamCreateNestedOneWithoutCyclesInput = TeamCreateNestedOneWithoutCyclesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamCreateNestedOneWithoutCyclesInput", {})
], TeamCreateNestedOneWithoutCyclesInput);
