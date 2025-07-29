"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueCreateNestedManyWithoutAssigneeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateManyAssigneeInputEnvelope_1 = require("../inputs/IssueCreateManyAssigneeInputEnvelope");
const IssueCreateOrConnectWithoutAssigneeInput_1 = require("../inputs/IssueCreateOrConnectWithoutAssigneeInput");
const IssueCreateWithoutAssigneeInput_1 = require("../inputs/IssueCreateWithoutAssigneeInput");
const IssueWhereUniqueInput_1 = require("../inputs/IssueWhereUniqueInput");
let IssueCreateNestedManyWithoutAssigneeInput = class IssueCreateNestedManyWithoutAssigneeInput {
};
exports.IssueCreateNestedManyWithoutAssigneeInput = IssueCreateNestedManyWithoutAssigneeInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueCreateWithoutAssigneeInput_1.IssueCreateWithoutAssigneeInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueCreateNestedManyWithoutAssigneeInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueCreateOrConnectWithoutAssigneeInput_1.IssueCreateOrConnectWithoutAssigneeInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueCreateNestedManyWithoutAssigneeInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateManyAssigneeInputEnvelope_1.IssueCreateManyAssigneeInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueCreateManyAssigneeInputEnvelope_1.IssueCreateManyAssigneeInputEnvelope)
], IssueCreateNestedManyWithoutAssigneeInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueWhereUniqueInput_1.IssueWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueCreateNestedManyWithoutAssigneeInput.prototype, "connect", void 0);
exports.IssueCreateNestedManyWithoutAssigneeInput = IssueCreateNestedManyWithoutAssigneeInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueCreateNestedManyWithoutAssigneeInput", {})
], IssueCreateNestedManyWithoutAssigneeInput);
