"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabelOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueLabelOrderByRelationAggregateInput_1 = require("../inputs/IssueLabelOrderByRelationAggregateInput");
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const SortOrder_1 = require("../../enums/SortOrder");
let LabelOrderByWithRelationInput = class LabelOrderByWithRelationInput {
};
exports.LabelOrderByWithRelationInput = LabelOrderByWithRelationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LabelOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LabelOrderByWithRelationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LabelOrderByWithRelationInput.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], LabelOrderByWithRelationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LabelOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LabelOrderByWithRelationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueLabelOrderByRelationAggregateInput_1.IssueLabelOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueLabelOrderByRelationAggregateInput_1.IssueLabelOrderByRelationAggregateInput)
], LabelOrderByWithRelationInput.prototype, "issues", void 0);
exports.LabelOrderByWithRelationInput = LabelOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LabelOrderByWithRelationInput", {})
], LabelOrderByWithRelationInput);
