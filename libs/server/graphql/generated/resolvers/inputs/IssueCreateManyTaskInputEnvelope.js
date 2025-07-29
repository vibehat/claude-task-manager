"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueCreateManyTaskInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateManyTaskInput_1 = require("../inputs/IssueCreateManyTaskInput");
let IssueCreateManyTaskInputEnvelope = class IssueCreateManyTaskInputEnvelope {
};
exports.IssueCreateManyTaskInputEnvelope = IssueCreateManyTaskInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueCreateManyTaskInput_1.IssueCreateManyTaskInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], IssueCreateManyTaskInputEnvelope.prototype, "data", void 0);
exports.IssueCreateManyTaskInputEnvelope = IssueCreateManyTaskInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueCreateManyTaskInputEnvelope", {})
], IssueCreateManyTaskInputEnvelope);
