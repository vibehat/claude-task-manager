"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabelGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LabelCountAggregate_1 = require("../outputs/LabelCountAggregate");
const LabelMaxAggregate_1 = require("../outputs/LabelMaxAggregate");
const LabelMinAggregate_1 = require("../outputs/LabelMinAggregate");
let LabelGroupBy = class LabelGroupBy {
};
exports.LabelGroupBy = LabelGroupBy;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], LabelGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], LabelGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], LabelGroupBy.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LabelGroupBy.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], LabelGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], LabelGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LabelCountAggregate_1.LabelCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LabelCountAggregate_1.LabelCountAggregate)
], LabelGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LabelMinAggregate_1.LabelMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LabelMinAggregate_1.LabelMinAggregate)
], LabelGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LabelMaxAggregate_1.LabelMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LabelMaxAggregate_1.LabelMaxAggregate)
], LabelGroupBy.prototype, "_max", void 0);
exports.LabelGroupBy = LabelGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("LabelGroupBy", {})
], LabelGroupBy);
