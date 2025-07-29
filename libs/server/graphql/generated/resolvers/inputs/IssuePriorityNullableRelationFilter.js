"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssuePriorityNullableRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssuePriorityWhereInput_1 = require("../inputs/IssuePriorityWhereInput");
let IssuePriorityNullableRelationFilter = class IssuePriorityNullableRelationFilter {
};
exports.IssuePriorityNullableRelationFilter = IssuePriorityNullableRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssuePriorityWhereInput_1.IssuePriorityWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssuePriorityWhereInput_1.IssuePriorityWhereInput)
], IssuePriorityNullableRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssuePriorityWhereInput_1.IssuePriorityWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssuePriorityWhereInput_1.IssuePriorityWhereInput)
], IssuePriorityNullableRelationFilter.prototype, "isNot", void 0);
exports.IssuePriorityNullableRelationFilter = IssuePriorityNullableRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("IssuePriorityNullableRelationFilter", {})
], IssuePriorityNullableRelationFilter);
