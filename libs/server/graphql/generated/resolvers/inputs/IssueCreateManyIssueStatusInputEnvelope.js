"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueCreateManyIssueStatusInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateManyIssueStatusInput_1 = require("../inputs/IssueCreateManyIssueStatusInput");
let IssueCreateManyIssueStatusInputEnvelope = class IssueCreateManyIssueStatusInputEnvelope {
};
exports.IssueCreateManyIssueStatusInputEnvelope = IssueCreateManyIssueStatusInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueCreateManyIssueStatusInput_1.IssueCreateManyIssueStatusInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], IssueCreateManyIssueStatusInputEnvelope.prototype, "data", void 0);
exports.IssueCreateManyIssueStatusInputEnvelope = IssueCreateManyIssueStatusInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueCreateManyIssueStatusInputEnvelope", {})
], IssueCreateManyIssueStatusInputEnvelope);
