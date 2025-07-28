"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueCreateNestedManyWithoutSubtaskInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateManySubtaskInputEnvelope_1 = require("../inputs/IssueCreateManySubtaskInputEnvelope");
const IssueCreateOrConnectWithoutSubtaskInput_1 = require("../inputs/IssueCreateOrConnectWithoutSubtaskInput");
const IssueCreateWithoutSubtaskInput_1 = require("../inputs/IssueCreateWithoutSubtaskInput");
const IssueWhereUniqueInput_1 = require("../inputs/IssueWhereUniqueInput");
let IssueCreateNestedManyWithoutSubtaskInput = class IssueCreateNestedManyWithoutSubtaskInput {
};
exports.IssueCreateNestedManyWithoutSubtaskInput = IssueCreateNestedManyWithoutSubtaskInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueCreateWithoutSubtaskInput_1.IssueCreateWithoutSubtaskInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueCreateNestedManyWithoutSubtaskInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueCreateOrConnectWithoutSubtaskInput_1.IssueCreateOrConnectWithoutSubtaskInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueCreateNestedManyWithoutSubtaskInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateManySubtaskInputEnvelope_1.IssueCreateManySubtaskInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueCreateManySubtaskInputEnvelope_1.IssueCreateManySubtaskInputEnvelope)
], IssueCreateNestedManyWithoutSubtaskInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueWhereUniqueInput_1.IssueWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueCreateNestedManyWithoutSubtaskInput.prototype, "connect", void 0);
exports.IssueCreateNestedManyWithoutSubtaskInput = IssueCreateNestedManyWithoutSubtaskInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueCreateNestedManyWithoutSubtaskInput", {})
], IssueCreateNestedManyWithoutSubtaskInput);
