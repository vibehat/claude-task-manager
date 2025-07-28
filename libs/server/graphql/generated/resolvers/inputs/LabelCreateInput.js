"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabelCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueLabelCreateNestedManyWithoutLabelInput_1 = require("../inputs/IssueLabelCreateNestedManyWithoutLabelInput");
let LabelCreateInput = class LabelCreateInput {
};
exports.LabelCreateInput = LabelCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LabelCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], LabelCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], LabelCreateInput.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LabelCreateInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], LabelCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], LabelCreateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueLabelCreateNestedManyWithoutLabelInput_1.IssueLabelCreateNestedManyWithoutLabelInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueLabelCreateNestedManyWithoutLabelInput_1.IssueLabelCreateNestedManyWithoutLabelInput)
], LabelCreateInput.prototype, "issues", void 0);
exports.LabelCreateInput = LabelCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LabelCreateInput", {})
], LabelCreateInput);
