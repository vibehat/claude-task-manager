"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueCreateNestedManyWithoutCycleInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateManyCycleInputEnvelope_1 = require("../inputs/IssueCreateManyCycleInputEnvelope");
const IssueCreateOrConnectWithoutCycleInput_1 = require("../inputs/IssueCreateOrConnectWithoutCycleInput");
const IssueCreateWithoutCycleInput_1 = require("../inputs/IssueCreateWithoutCycleInput");
const IssueWhereUniqueInput_1 = require("../inputs/IssueWhereUniqueInput");
let IssueCreateNestedManyWithoutCycleInput = class IssueCreateNestedManyWithoutCycleInput {
};
exports.IssueCreateNestedManyWithoutCycleInput = IssueCreateNestedManyWithoutCycleInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueCreateWithoutCycleInput_1.IssueCreateWithoutCycleInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueCreateNestedManyWithoutCycleInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueCreateOrConnectWithoutCycleInput_1.IssueCreateOrConnectWithoutCycleInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueCreateNestedManyWithoutCycleInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateManyCycleInputEnvelope_1.IssueCreateManyCycleInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueCreateManyCycleInputEnvelope_1.IssueCreateManyCycleInputEnvelope)
], IssueCreateNestedManyWithoutCycleInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueWhereUniqueInput_1.IssueWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueCreateNestedManyWithoutCycleInput.prototype, "connect", void 0);
exports.IssueCreateNestedManyWithoutCycleInput = IssueCreateNestedManyWithoutCycleInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueCreateNestedManyWithoutCycleInput", {})
], IssueCreateNestedManyWithoutCycleInput);
