"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueLabelCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let IssueLabelCreateManyInput = class IssueLabelCreateManyInput {
};
exports.IssueLabelCreateManyInput = IssueLabelCreateManyInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueLabelCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IssueLabelCreateManyInput.prototype, "issueId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IssueLabelCreateManyInput.prototype, "labelId", void 0);
exports.IssueLabelCreateManyInput = IssueLabelCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueLabelCreateManyInput", {})
], IssueLabelCreateManyInput);
