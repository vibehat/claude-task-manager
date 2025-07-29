"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueCreateManyProjectInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateManyProjectInput_1 = require("../inputs/IssueCreateManyProjectInput");
let IssueCreateManyProjectInputEnvelope = class IssueCreateManyProjectInputEnvelope {
};
exports.IssueCreateManyProjectInputEnvelope = IssueCreateManyProjectInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueCreateManyProjectInput_1.IssueCreateManyProjectInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], IssueCreateManyProjectInputEnvelope.prototype, "data", void 0);
exports.IssueCreateManyProjectInputEnvelope = IssueCreateManyProjectInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueCreateManyProjectInputEnvelope", {})
], IssueCreateManyProjectInputEnvelope);
