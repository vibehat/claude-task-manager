"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueCreateNestedManyWithoutParentIssueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateManyParentIssueInputEnvelope_1 = require("../inputs/IssueCreateManyParentIssueInputEnvelope");
const IssueCreateOrConnectWithoutParentIssueInput_1 = require("../inputs/IssueCreateOrConnectWithoutParentIssueInput");
const IssueCreateWithoutParentIssueInput_1 = require("../inputs/IssueCreateWithoutParentIssueInput");
const IssueWhereUniqueInput_1 = require("../inputs/IssueWhereUniqueInput");
let IssueCreateNestedManyWithoutParentIssueInput = class IssueCreateNestedManyWithoutParentIssueInput {
};
exports.IssueCreateNestedManyWithoutParentIssueInput = IssueCreateNestedManyWithoutParentIssueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueCreateWithoutParentIssueInput_1.IssueCreateWithoutParentIssueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueCreateNestedManyWithoutParentIssueInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueCreateOrConnectWithoutParentIssueInput_1.IssueCreateOrConnectWithoutParentIssueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueCreateNestedManyWithoutParentIssueInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateManyParentIssueInputEnvelope_1.IssueCreateManyParentIssueInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueCreateManyParentIssueInputEnvelope_1.IssueCreateManyParentIssueInputEnvelope)
], IssueCreateNestedManyWithoutParentIssueInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueWhereUniqueInput_1.IssueWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueCreateNestedManyWithoutParentIssueInput.prototype, "connect", void 0);
exports.IssueCreateNestedManyWithoutParentIssueInput = IssueCreateNestedManyWithoutParentIssueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueCreateNestedManyWithoutParentIssueInput", {})
], IssueCreateNestedManyWithoutParentIssueInput);
