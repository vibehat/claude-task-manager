"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const UserCountOrderByAggregateInput_1 = require("../inputs/UserCountOrderByAggregateInput");
const UserMaxOrderByAggregateInput_1 = require("../inputs/UserMaxOrderByAggregateInput");
const UserMinOrderByAggregateInput_1 = require("../inputs/UserMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let UserOrderByWithAggregationInput = class UserOrderByWithAggregationInput {
};
exports.UserOrderByWithAggregationInput = UserOrderByWithAggregationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserOrderByWithAggregationInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], UserOrderByWithAggregationInput.prototype, "avatarUrl", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserOrderByWithAggregationInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserOrderByWithAggregationInput.prototype, "role", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserOrderByWithAggregationInput.prototype, "joinedDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserOrderByWithAggregationInput.prototype, "teamIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCountOrderByAggregateInput_1.UserCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCountOrderByAggregateInput_1.UserCountOrderByAggregateInput)
], UserOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserMaxOrderByAggregateInput_1.UserMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserMaxOrderByAggregateInput_1.UserMaxOrderByAggregateInput)
], UserOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserMinOrderByAggregateInput_1.UserMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserMinOrderByAggregateInput_1.UserMinOrderByAggregateInput)
], UserOrderByWithAggregationInput.prototype, "_min", void 0);
exports.UserOrderByWithAggregationInput = UserOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserOrderByWithAggregationInput", {})
], UserOrderByWithAggregationInput);
