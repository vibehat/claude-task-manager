"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueCreateManyCycleInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateManyCycleInput_1 = require("../inputs/IssueCreateManyCycleInput");
let IssueCreateManyCycleInputEnvelope = class IssueCreateManyCycleInputEnvelope {
};
exports.IssueCreateManyCycleInputEnvelope = IssueCreateManyCycleInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueCreateManyCycleInput_1.IssueCreateManyCycleInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], IssueCreateManyCycleInputEnvelope.prototype, "data", void 0);
exports.IssueCreateManyCycleInputEnvelope = IssueCreateManyCycleInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueCreateManyCycleInputEnvelope", {})
], IssueCreateManyCycleInputEnvelope);
