"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateLabel = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LabelCountAggregate_1 = require("../outputs/LabelCountAggregate");
const LabelMaxAggregate_1 = require("../outputs/LabelMaxAggregate");
const LabelMinAggregate_1 = require("../outputs/LabelMinAggregate");
let AggregateLabel = class AggregateLabel {
};
exports.AggregateLabel = AggregateLabel;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LabelCountAggregate_1.LabelCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LabelCountAggregate_1.LabelCountAggregate)
], AggregateLabel.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LabelMinAggregate_1.LabelMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LabelMinAggregate_1.LabelMinAggregate)
], AggregateLabel.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LabelMaxAggregate_1.LabelMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LabelMaxAggregate_1.LabelMaxAggregate)
], AggregateLabel.prototype, "_max", void 0);
exports.AggregateLabel = AggregateLabel = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateLabel", {})
], AggregateLabel);
