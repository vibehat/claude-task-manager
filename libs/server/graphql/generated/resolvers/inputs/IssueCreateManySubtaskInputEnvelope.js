"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueCreateManySubtaskInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateManySubtaskInput_1 = require("../inputs/IssueCreateManySubtaskInput");
let IssueCreateManySubtaskInputEnvelope = class IssueCreateManySubtaskInputEnvelope {
};
exports.IssueCreateManySubtaskInputEnvelope = IssueCreateManySubtaskInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueCreateManySubtaskInput_1.IssueCreateManySubtaskInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], IssueCreateManySubtaskInputEnvelope.prototype, "data", void 0);
exports.IssueCreateManySubtaskInputEnvelope = IssueCreateManySubtaskInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueCreateManySubtaskInputEnvelope", {})
], IssueCreateManySubtaskInputEnvelope);
