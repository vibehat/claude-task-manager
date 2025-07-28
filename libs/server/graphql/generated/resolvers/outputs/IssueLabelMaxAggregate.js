"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueLabelMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let IssueLabelMaxAggregate = class IssueLabelMaxAggregate {
};
exports.IssueLabelMaxAggregate = IssueLabelMaxAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueLabelMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueLabelMaxAggregate.prototype, "issueId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueLabelMaxAggregate.prototype, "labelId", void 0);
exports.IssueLabelMaxAggregate = IssueLabelMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("IssueLabelMaxAggregate", {})
], IssueLabelMaxAggregate);
