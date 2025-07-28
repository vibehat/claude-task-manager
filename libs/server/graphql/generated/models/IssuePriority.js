"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssuePriority = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssuePriorityCount_1 = require("../resolvers/outputs/IssuePriorityCount");
let IssuePriority = class IssuePriority {
};
exports.IssuePriority = IssuePriority;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IssuePriority.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IssuePriority.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IssuePriority.prototype, "iconName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], IssuePriority.prototype, "order", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], IssuePriority.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], IssuePriority.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssuePriorityCount_1.IssuePriorityCount, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssuePriorityCount_1.IssuePriorityCount)
], IssuePriority.prototype, "_count", void 0);
exports.IssuePriority = IssuePriority = tslib_1.__decorate([
    TypeGraphQL.ObjectType("IssuePriority", {})
], IssuePriority);
