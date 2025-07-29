"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CycleUpsertWithWhereUniqueWithoutTeamInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CycleCreateWithoutTeamInput_1 = require("../inputs/CycleCreateWithoutTeamInput");
const CycleUpdateWithoutTeamInput_1 = require("../inputs/CycleUpdateWithoutTeamInput");
const CycleWhereUniqueInput_1 = require("../inputs/CycleWhereUniqueInput");
let CycleUpsertWithWhereUniqueWithoutTeamInput = class CycleUpsertWithWhereUniqueWithoutTeamInput {
};
exports.CycleUpsertWithWhereUniqueWithoutTeamInput = CycleUpsertWithWhereUniqueWithoutTeamInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleWhereUniqueInput_1.CycleWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CycleWhereUniqueInput_1.CycleWhereUniqueInput)
], CycleUpsertWithWhereUniqueWithoutTeamInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleUpdateWithoutTeamInput_1.CycleUpdateWithoutTeamInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CycleUpdateWithoutTeamInput_1.CycleUpdateWithoutTeamInput)
], CycleUpsertWithWhereUniqueWithoutTeamInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleCreateWithoutTeamInput_1.CycleCreateWithoutTeamInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CycleCreateWithoutTeamInput_1.CycleCreateWithoutTeamInput)
], CycleUpsertWithWhereUniqueWithoutTeamInput.prototype, "create", void 0);
exports.CycleUpsertWithWhereUniqueWithoutTeamInput = CycleUpsertWithWhereUniqueWithoutTeamInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CycleUpsertWithWhereUniqueWithoutTeamInput", {})
], CycleUpsertWithWhereUniqueWithoutTeamInput);
