"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CycleUpdateWithWhereUniqueWithoutTeamInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CycleUpdateWithoutTeamInput_1 = require("../inputs/CycleUpdateWithoutTeamInput");
const CycleWhereUniqueInput_1 = require("../inputs/CycleWhereUniqueInput");
let CycleUpdateWithWhereUniqueWithoutTeamInput = class CycleUpdateWithWhereUniqueWithoutTeamInput {
};
exports.CycleUpdateWithWhereUniqueWithoutTeamInput = CycleUpdateWithWhereUniqueWithoutTeamInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleWhereUniqueInput_1.CycleWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CycleWhereUniqueInput_1.CycleWhereUniqueInput)
], CycleUpdateWithWhereUniqueWithoutTeamInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleUpdateWithoutTeamInput_1.CycleUpdateWithoutTeamInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CycleUpdateWithoutTeamInput_1.CycleUpdateWithoutTeamInput)
], CycleUpdateWithWhereUniqueWithoutTeamInput.prototype, "data", void 0);
exports.CycleUpdateWithWhereUniqueWithoutTeamInput = CycleUpdateWithWhereUniqueWithoutTeamInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CycleUpdateWithWhereUniqueWithoutTeamInput", {})
], CycleUpdateWithWhereUniqueWithoutTeamInput);
