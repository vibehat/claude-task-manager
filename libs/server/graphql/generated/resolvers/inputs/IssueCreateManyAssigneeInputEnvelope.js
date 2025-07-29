"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueCreateManyAssigneeInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateManyAssigneeInput_1 = require("../inputs/IssueCreateManyAssigneeInput");
let IssueCreateManyAssigneeInputEnvelope = class IssueCreateManyAssigneeInputEnvelope {
};
exports.IssueCreateManyAssigneeInputEnvelope = IssueCreateManyAssigneeInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueCreateManyAssigneeInput_1.IssueCreateManyAssigneeInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], IssueCreateManyAssigneeInputEnvelope.prototype, "data", void 0);
exports.IssueCreateManyAssigneeInputEnvelope = IssueCreateManyAssigneeInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueCreateManyAssigneeInputEnvelope", {})
], IssueCreateManyAssigneeInputEnvelope);
