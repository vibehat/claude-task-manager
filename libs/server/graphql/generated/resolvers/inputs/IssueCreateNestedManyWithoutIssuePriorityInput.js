"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueCreateNestedManyWithoutIssuePriorityInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateManyIssuePriorityInputEnvelope_1 = require("../inputs/IssueCreateManyIssuePriorityInputEnvelope");
const IssueCreateOrConnectWithoutIssuePriorityInput_1 = require("../inputs/IssueCreateOrConnectWithoutIssuePriorityInput");
const IssueCreateWithoutIssuePriorityInput_1 = require("../inputs/IssueCreateWithoutIssuePriorityInput");
const IssueWhereUniqueInput_1 = require("../inputs/IssueWhereUniqueInput");
let IssueCreateNestedManyWithoutIssuePriorityInput = class IssueCreateNestedManyWithoutIssuePriorityInput {
};
exports.IssueCreateNestedManyWithoutIssuePriorityInput = IssueCreateNestedManyWithoutIssuePriorityInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueCreateWithoutIssuePriorityInput_1.IssueCreateWithoutIssuePriorityInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueCreateNestedManyWithoutIssuePriorityInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueCreateOrConnectWithoutIssuePriorityInput_1.IssueCreateOrConnectWithoutIssuePriorityInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueCreateNestedManyWithoutIssuePriorityInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateManyIssuePriorityInputEnvelope_1.IssueCreateManyIssuePriorityInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueCreateManyIssuePriorityInputEnvelope_1.IssueCreateManyIssuePriorityInputEnvelope)
], IssueCreateNestedManyWithoutIssuePriorityInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueWhereUniqueInput_1.IssueWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueCreateNestedManyWithoutIssuePriorityInput.prototype, "connect", void 0);
exports.IssueCreateNestedManyWithoutIssuePriorityInput = IssueCreateNestedManyWithoutIssuePriorityInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueCreateNestedManyWithoutIssuePriorityInput", {})
], IssueCreateNestedManyWithoutIssuePriorityInput);
