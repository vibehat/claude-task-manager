"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CycleCreateManyTeamInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CycleCreateManyTeamInput_1 = require("../inputs/CycleCreateManyTeamInput");
let CycleCreateManyTeamInputEnvelope = class CycleCreateManyTeamInputEnvelope {
};
exports.CycleCreateManyTeamInputEnvelope = CycleCreateManyTeamInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CycleCreateManyTeamInput_1.CycleCreateManyTeamInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CycleCreateManyTeamInputEnvelope.prototype, "data", void 0);
exports.CycleCreateManyTeamInputEnvelope = CycleCreateManyTeamInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("CycleCreateManyTeamInputEnvelope", {})
], CycleCreateManyTeamInputEnvelope);
