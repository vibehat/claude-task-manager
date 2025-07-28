"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueLabelCreateManyIssueInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueLabelCreateManyIssueInput_1 = require("../inputs/IssueLabelCreateManyIssueInput");
let IssueLabelCreateManyIssueInputEnvelope = class IssueLabelCreateManyIssueInputEnvelope {
};
exports.IssueLabelCreateManyIssueInputEnvelope = IssueLabelCreateManyIssueInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueLabelCreateManyIssueInput_1.IssueLabelCreateManyIssueInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], IssueLabelCreateManyIssueInputEnvelope.prototype, "data", void 0);
exports.IssueLabelCreateManyIssueInputEnvelope = IssueLabelCreateManyIssueInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueLabelCreateManyIssueInputEnvelope", {})
], IssueLabelCreateManyIssueInputEnvelope);
