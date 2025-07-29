"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubtaskNullableRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubtaskWhereInput_1 = require("../inputs/SubtaskWhereInput");
let SubtaskNullableRelationFilter = class SubtaskNullableRelationFilter {
};
exports.SubtaskNullableRelationFilter = SubtaskNullableRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskWhereInput_1.SubtaskWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubtaskWhereInput_1.SubtaskWhereInput)
], SubtaskNullableRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskWhereInput_1.SubtaskWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubtaskWhereInput_1.SubtaskWhereInput)
], SubtaskNullableRelationFilter.prototype, "isNot", void 0);
exports.SubtaskNullableRelationFilter = SubtaskNullableRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("SubtaskNullableRelationFilter", {})
], SubtaskNullableRelationFilter);
