"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CycleCreateOrConnectWithoutIssuesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CycleCreateWithoutIssuesInput_1 = require("../inputs/CycleCreateWithoutIssuesInput");
const CycleWhereUniqueInput_1 = require("../inputs/CycleWhereUniqueInput");
let CycleCreateOrConnectWithoutIssuesInput = class CycleCreateOrConnectWithoutIssuesInput {
};
exports.CycleCreateOrConnectWithoutIssuesInput = CycleCreateOrConnectWithoutIssuesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleWhereUniqueInput_1.CycleWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CycleWhereUniqueInput_1.CycleWhereUniqueInput)
], CycleCreateOrConnectWithoutIssuesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleCreateWithoutIssuesInput_1.CycleCreateWithoutIssuesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CycleCreateWithoutIssuesInput_1.CycleCreateWithoutIssuesInput)
], CycleCreateOrConnectWithoutIssuesInput.prototype, "create", void 0);
exports.CycleCreateOrConnectWithoutIssuesInput = CycleCreateOrConnectWithoutIssuesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CycleCreateOrConnectWithoutIssuesInput", {})
], CycleCreateOrConnectWithoutIssuesInput);
