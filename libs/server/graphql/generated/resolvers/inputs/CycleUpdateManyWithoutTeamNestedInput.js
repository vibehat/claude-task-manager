"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CycleUpdateManyWithoutTeamNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CycleCreateManyTeamInputEnvelope_1 = require("../inputs/CycleCreateManyTeamInputEnvelope");
const CycleCreateOrConnectWithoutTeamInput_1 = require("../inputs/CycleCreateOrConnectWithoutTeamInput");
const CycleCreateWithoutTeamInput_1 = require("../inputs/CycleCreateWithoutTeamInput");
const CycleScalarWhereInput_1 = require("../inputs/CycleScalarWhereInput");
const CycleUpdateManyWithWhereWithoutTeamInput_1 = require("../inputs/CycleUpdateManyWithWhereWithoutTeamInput");
const CycleUpdateWithWhereUniqueWithoutTeamInput_1 = require("../inputs/CycleUpdateWithWhereUniqueWithoutTeamInput");
const CycleUpsertWithWhereUniqueWithoutTeamInput_1 = require("../inputs/CycleUpsertWithWhereUniqueWithoutTeamInput");
const CycleWhereUniqueInput_1 = require("../inputs/CycleWhereUniqueInput");
let CycleUpdateManyWithoutTeamNestedInput = class CycleUpdateManyWithoutTeamNestedInput {
};
exports.CycleUpdateManyWithoutTeamNestedInput = CycleUpdateManyWithoutTeamNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CycleCreateWithoutTeamInput_1.CycleCreateWithoutTeamInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CycleUpdateManyWithoutTeamNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CycleCreateOrConnectWithoutTeamInput_1.CycleCreateOrConnectWithoutTeamInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CycleUpdateManyWithoutTeamNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CycleUpsertWithWhereUniqueWithoutTeamInput_1.CycleUpsertWithWhereUniqueWithoutTeamInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CycleUpdateManyWithoutTeamNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleCreateManyTeamInputEnvelope_1.CycleCreateManyTeamInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CycleCreateManyTeamInputEnvelope_1.CycleCreateManyTeamInputEnvelope)
], CycleUpdateManyWithoutTeamNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CycleWhereUniqueInput_1.CycleWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CycleUpdateManyWithoutTeamNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CycleWhereUniqueInput_1.CycleWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CycleUpdateManyWithoutTeamNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CycleWhereUniqueInput_1.CycleWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CycleUpdateManyWithoutTeamNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CycleWhereUniqueInput_1.CycleWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CycleUpdateManyWithoutTeamNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CycleUpdateWithWhereUniqueWithoutTeamInput_1.CycleUpdateWithWhereUniqueWithoutTeamInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CycleUpdateManyWithoutTeamNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CycleUpdateManyWithWhereWithoutTeamInput_1.CycleUpdateManyWithWhereWithoutTeamInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CycleUpdateManyWithoutTeamNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CycleScalarWhereInput_1.CycleScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CycleUpdateManyWithoutTeamNestedInput.prototype, "deleteMany", void 0);
exports.CycleUpdateManyWithoutTeamNestedInput = CycleUpdateManyWithoutTeamNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CycleUpdateManyWithoutTeamNestedInput", {})
], CycleUpdateManyWithoutTeamNestedInput);
