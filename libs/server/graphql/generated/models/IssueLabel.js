"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueLabel = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let IssueLabel = class IssueLabel {
};
exports.IssueLabel = IssueLabel;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IssueLabel.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IssueLabel.prototype, "issueId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IssueLabel.prototype, "labelId", void 0);
exports.IssueLabel = IssueLabel = tslib_1.__decorate([
    TypeGraphQL.ObjectType("IssueLabel", {})
], IssueLabel);
