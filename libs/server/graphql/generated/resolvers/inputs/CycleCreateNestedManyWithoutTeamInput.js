"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CycleCreateNestedManyWithoutTeamInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CycleCreateManyTeamInputEnvelope_1 = require("../inputs/CycleCreateManyTeamInputEnvelope");
const CycleCreateOrConnectWithoutTeamInput_1 = require("../inputs/CycleCreateOrConnectWithoutTeamInput");
const CycleCreateWithoutTeamInput_1 = require("../inputs/CycleCreateWithoutTeamInput");
const CycleWhereUniqueInput_1 = require("../inputs/CycleWhereUniqueInput");
let CycleCreateNestedManyWithoutTeamInput = class CycleCreateNestedManyWithoutTeamInput {
};
exports.CycleCreateNestedManyWithoutTeamInput = CycleCreateNestedManyWithoutTeamInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CycleCreateWithoutTeamInput_1.CycleCreateWithoutTeamInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CycleCreateNestedManyWithoutTeamInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CycleCreateOrConnectWithoutTeamInput_1.CycleCreateOrConnectWithoutTeamInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CycleCreateNestedManyWithoutTeamInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleCreateManyTeamInputEnvelope_1.CycleCreateManyTeamInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CycleCreateManyTeamInputEnvelope_1.CycleCreateManyTeamInputEnvelope)
], CycleCreateNestedManyWithoutTeamInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CycleWhereUniqueInput_1.CycleWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CycleCreateNestedManyWithoutTeamInput.prototype, "connect", void 0);
exports.CycleCreateNestedManyWithoutTeamInput = CycleCreateNestedManyWithoutTeamInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CycleCreateNestedManyWithoutTeamInput", {})
], CycleCreateNestedManyWithoutTeamInput);
