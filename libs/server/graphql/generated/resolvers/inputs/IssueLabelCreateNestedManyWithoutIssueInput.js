"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueLabelCreateNestedManyWithoutIssueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueLabelCreateManyIssueInputEnvelope_1 = require("../inputs/IssueLabelCreateManyIssueInputEnvelope");
const IssueLabelCreateOrConnectWithoutIssueInput_1 = require("../inputs/IssueLabelCreateOrConnectWithoutIssueInput");
const IssueLabelCreateWithoutIssueInput_1 = require("../inputs/IssueLabelCreateWithoutIssueInput");
const IssueLabelWhereUniqueInput_1 = require("../inputs/IssueLabelWhereUniqueInput");
let IssueLabelCreateNestedManyWithoutIssueInput = class IssueLabelCreateNestedManyWithoutIssueInput {
};
exports.IssueLabelCreateNestedManyWithoutIssueInput = IssueLabelCreateNestedManyWithoutIssueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueLabelCreateWithoutIssueInput_1.IssueLabelCreateWithoutIssueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueLabelCreateNestedManyWithoutIssueInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueLabelCreateOrConnectWithoutIssueInput_1.IssueLabelCreateOrConnectWithoutIssueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueLabelCreateNestedManyWithoutIssueInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueLabelCreateManyIssueInputEnvelope_1.IssueLabelCreateManyIssueInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueLabelCreateManyIssueInputEnvelope_1.IssueLabelCreateManyIssueInputEnvelope)
], IssueLabelCreateNestedManyWithoutIssueInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueLabelWhereUniqueInput_1.IssueLabelWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueLabelCreateNestedManyWithoutIssueInput.prototype, "connect", void 0);
exports.IssueLabelCreateNestedManyWithoutIssueInput = IssueLabelCreateNestedManyWithoutIssueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueLabelCreateNestedManyWithoutIssueInput", {})
], IssueLabelCreateNestedManyWithoutIssueInput);
