"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateUser = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCountAggregate_1 = require("../outputs/UserCountAggregate");
const UserMaxAggregate_1 = require("../outputs/UserMaxAggregate");
const UserMinAggregate_1 = require("../outputs/UserMinAggregate");
let AggregateUser = class AggregateUser {
};
exports.AggregateUser = AggregateUser;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCountAggregate_1.UserCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCountAggregate_1.UserCountAggregate)
], AggregateUser.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserMinAggregate_1.UserMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserMinAggregate_1.UserMinAggregate)
], AggregateUser.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserMaxAggregate_1.UserMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserMaxAggregate_1.UserMaxAggregate)
], AggregateUser.prototype, "_max", void 0);
exports.AggregateUser = AggregateUser = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateUser", {})
], AggregateUser);
