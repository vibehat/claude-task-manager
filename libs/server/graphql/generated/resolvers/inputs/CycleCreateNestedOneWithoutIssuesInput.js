"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CycleCreateNestedOneWithoutIssuesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CycleCreateOrConnectWithoutIssuesInput_1 = require("../inputs/CycleCreateOrConnectWithoutIssuesInput");
const CycleCreateWithoutIssuesInput_1 = require("../inputs/CycleCreateWithoutIssuesInput");
const CycleWhereUniqueInput_1 = require("../inputs/CycleWhereUniqueInput");
let CycleCreateNestedOneWithoutIssuesInput = class CycleCreateNestedOneWithoutIssuesInput {
};
exports.CycleCreateNestedOneWithoutIssuesInput = CycleCreateNestedOneWithoutIssuesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleCreateWithoutIssuesInput_1.CycleCreateWithoutIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CycleCreateWithoutIssuesInput_1.CycleCreateWithoutIssuesInput)
], CycleCreateNestedOneWithoutIssuesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleCreateOrConnectWithoutIssuesInput_1.CycleCreateOrConnectWithoutIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CycleCreateOrConnectWithoutIssuesInput_1.CycleCreateOrConnectWithoutIssuesInput)
], CycleCreateNestedOneWithoutIssuesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleWhereUniqueInput_1.CycleWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CycleWhereUniqueInput_1.CycleWhereUniqueInput)
], CycleCreateNestedOneWithoutIssuesInput.prototype, "connect", void 0);
exports.CycleCreateNestedOneWithoutIssuesInput = CycleCreateNestedOneWithoutIssuesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CycleCreateNestedOneWithoutIssuesInput", {})
], CycleCreateNestedOneWithoutIssuesInput);
