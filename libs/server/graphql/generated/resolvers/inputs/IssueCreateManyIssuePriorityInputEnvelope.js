"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueCreateManyIssuePriorityInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateManyIssuePriorityInput_1 = require("../inputs/IssueCreateManyIssuePriorityInput");
let IssueCreateManyIssuePriorityInputEnvelope = class IssueCreateManyIssuePriorityInputEnvelope {
};
exports.IssueCreateManyIssuePriorityInputEnvelope = IssueCreateManyIssuePriorityInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueCreateManyIssuePriorityInput_1.IssueCreateManyIssuePriorityInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], IssueCreateManyIssuePriorityInputEnvelope.prototype, "data", void 0);
exports.IssueCreateManyIssuePriorityInputEnvelope = IssueCreateManyIssuePriorityInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueCreateManyIssuePriorityInputEnvelope", {})
], IssueCreateManyIssuePriorityInputEnvelope);
