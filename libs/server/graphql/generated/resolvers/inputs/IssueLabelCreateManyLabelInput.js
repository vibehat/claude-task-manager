"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueLabelCreateManyLabelInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let IssueLabelCreateManyLabelInput = class IssueLabelCreateManyLabelInput {
};
exports.IssueLabelCreateManyLabelInput = IssueLabelCreateManyLabelInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueLabelCreateManyLabelInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IssueLabelCreateManyLabelInput.prototype, "issueId", void 0);
exports.IssueLabelCreateManyLabelInput = IssueLabelCreateManyLabelInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueLabelCreateManyLabelInput", {})
], IssueLabelCreateManyLabelInput);
