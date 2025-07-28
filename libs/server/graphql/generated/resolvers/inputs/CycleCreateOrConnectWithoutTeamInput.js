"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CycleCreateOrConnectWithoutTeamInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CycleCreateWithoutTeamInput_1 = require("../inputs/CycleCreateWithoutTeamInput");
const CycleWhereUniqueInput_1 = require("../inputs/CycleWhereUniqueInput");
let CycleCreateOrConnectWithoutTeamInput = class CycleCreateOrConnectWithoutTeamInput {
};
exports.CycleCreateOrConnectWithoutTeamInput = CycleCreateOrConnectWithoutTeamInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleWhereUniqueInput_1.CycleWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CycleWhereUniqueInput_1.CycleWhereUniqueInput)
], CycleCreateOrConnectWithoutTeamInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleCreateWithoutTeamInput_1.CycleCreateWithoutTeamInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CycleCreateWithoutTeamInput_1.CycleCreateWithoutTeamInput)
], CycleCreateOrConnectWithoutTeamInput.prototype, "create", void 0);
exports.CycleCreateOrConnectWithoutTeamInput = CycleCreateOrConnectWithoutTeamInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CycleCreateOrConnectWithoutTeamInput", {})
], CycleCreateOrConnectWithoutTeamInput);
