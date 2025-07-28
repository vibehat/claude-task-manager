"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAndReturnIssueLabel = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Issue_1 = require("../../models/Issue");
const Label_1 = require("../../models/Label");
let CreateManyAndReturnIssueLabel = class CreateManyAndReturnIssueLabel {
};
exports.CreateManyAndReturnIssueLabel = CreateManyAndReturnIssueLabel;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyAndReturnIssueLabel.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyAndReturnIssueLabel.prototype, "issueId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyAndReturnIssueLabel.prototype, "labelId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Issue_1.Issue, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Issue_1.Issue)
], CreateManyAndReturnIssueLabel.prototype, "issue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Label_1.Label, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Label_1.Label)
], CreateManyAndReturnIssueLabel.prototype, "label", void 0);
exports.CreateManyAndReturnIssueLabel = CreateManyAndReturnIssueLabel = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CreateManyAndReturnIssueLabel", {})
], CreateManyAndReturnIssueLabel);
