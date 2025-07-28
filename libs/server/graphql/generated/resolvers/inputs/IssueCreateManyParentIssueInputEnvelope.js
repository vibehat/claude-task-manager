"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueCreateManyParentIssueInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateManyParentIssueInput_1 = require("../inputs/IssueCreateManyParentIssueInput");
let IssueCreateManyParentIssueInputEnvelope = class IssueCreateManyParentIssueInputEnvelope {
};
exports.IssueCreateManyParentIssueInputEnvelope = IssueCreateManyParentIssueInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueCreateManyParentIssueInput_1.IssueCreateManyParentIssueInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], IssueCreateManyParentIssueInputEnvelope.prototype, "data", void 0);
exports.IssueCreateManyParentIssueInputEnvelope = IssueCreateManyParentIssueInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueCreateManyParentIssueInputEnvelope", {})
], IssueCreateManyParentIssueInputEnvelope);
