"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueCreateNestedManyWithoutProjectInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateManyProjectInputEnvelope_1 = require("../inputs/IssueCreateManyProjectInputEnvelope");
const IssueCreateOrConnectWithoutProjectInput_1 = require("../inputs/IssueCreateOrConnectWithoutProjectInput");
const IssueCreateWithoutProjectInput_1 = require("../inputs/IssueCreateWithoutProjectInput");
const IssueWhereUniqueInput_1 = require("../inputs/IssueWhereUniqueInput");
let IssueCreateNestedManyWithoutProjectInput = class IssueCreateNestedManyWithoutProjectInput {
};
exports.IssueCreateNestedManyWithoutProjectInput = IssueCreateNestedManyWithoutProjectInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueCreateWithoutProjectInput_1.IssueCreateWithoutProjectInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueCreateNestedManyWithoutProjectInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueCreateOrConnectWithoutProjectInput_1.IssueCreateOrConnectWithoutProjectInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueCreateNestedManyWithoutProjectInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateManyProjectInputEnvelope_1.IssueCreateManyProjectInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueCreateManyProjectInputEnvelope_1.IssueCreateManyProjectInputEnvelope)
], IssueCreateNestedManyWithoutProjectInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueWhereUniqueInput_1.IssueWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueCreateNestedManyWithoutProjectInput.prototype, "connect", void 0);
exports.IssueCreateNestedManyWithoutProjectInput = IssueCreateNestedManyWithoutProjectInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueCreateNestedManyWithoutProjectInput", {})
], IssueCreateNestedManyWithoutProjectInput);
