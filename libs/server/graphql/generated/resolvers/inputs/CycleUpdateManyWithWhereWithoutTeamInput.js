"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CycleUpdateManyWithWhereWithoutTeamInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CycleScalarWhereInput_1 = require("../inputs/CycleScalarWhereInput");
const CycleUpdateManyMutationInput_1 = require("../inputs/CycleUpdateManyMutationInput");
let CycleUpdateManyWithWhereWithoutTeamInput = class CycleUpdateManyWithWhereWithoutTeamInput {
};
exports.CycleUpdateManyWithWhereWithoutTeamInput = CycleUpdateManyWithWhereWithoutTeamInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleScalarWhereInput_1.CycleScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CycleScalarWhereInput_1.CycleScalarWhereInput)
], CycleUpdateManyWithWhereWithoutTeamInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleUpdateManyMutationInput_1.CycleUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CycleUpdateManyMutationInput_1.CycleUpdateManyMutationInput)
], CycleUpdateManyWithWhereWithoutTeamInput.prototype, "data", void 0);
exports.CycleUpdateManyWithWhereWithoutTeamInput = CycleUpdateManyWithWhereWithoutTeamInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CycleUpdateManyWithWhereWithoutTeamInput", {})
], CycleUpdateManyWithWhereWithoutTeamInput);
