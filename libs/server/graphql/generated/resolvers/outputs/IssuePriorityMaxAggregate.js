"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssuePriorityMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let IssuePriorityMaxAggregate = class IssuePriorityMaxAggregate {
};
exports.IssuePriorityMaxAggregate = IssuePriorityMaxAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssuePriorityMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssuePriorityMaxAggregate.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssuePriorityMaxAggregate.prototype, "iconName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], IssuePriorityMaxAggregate.prototype, "order", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], IssuePriorityMaxAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], IssuePriorityMaxAggregate.prototype, "updatedAt", void 0);
exports.IssuePriorityMaxAggregate = IssuePriorityMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("IssuePriorityMaxAggregate", {})
], IssuePriorityMaxAggregate);
