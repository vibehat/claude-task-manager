"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueCreateNestedManyWithoutTaskInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateManyTaskInputEnvelope_1 = require("../inputs/IssueCreateManyTaskInputEnvelope");
const IssueCreateOrConnectWithoutTaskInput_1 = require("../inputs/IssueCreateOrConnectWithoutTaskInput");
const IssueCreateWithoutTaskInput_1 = require("../inputs/IssueCreateWithoutTaskInput");
const IssueWhereUniqueInput_1 = require("../inputs/IssueWhereUniqueInput");
let IssueCreateNestedManyWithoutTaskInput = class IssueCreateNestedManyWithoutTaskInput {
};
exports.IssueCreateNestedManyWithoutTaskInput = IssueCreateNestedManyWithoutTaskInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueCreateWithoutTaskInput_1.IssueCreateWithoutTaskInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueCreateNestedManyWithoutTaskInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueCreateOrConnectWithoutTaskInput_1.IssueCreateOrConnectWithoutTaskInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueCreateNestedManyWithoutTaskInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateManyTaskInputEnvelope_1.IssueCreateManyTaskInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueCreateManyTaskInputEnvelope_1.IssueCreateManyTaskInputEnvelope)
], IssueCreateNestedManyWithoutTaskInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueWhereUniqueInput_1.IssueWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueCreateNestedManyWithoutTaskInput.prototype, "connect", void 0);
exports.IssueCreateNestedManyWithoutTaskInput = IssueCreateNestedManyWithoutTaskInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueCreateNestedManyWithoutTaskInput", {})
], IssueCreateNestedManyWithoutTaskInput);
