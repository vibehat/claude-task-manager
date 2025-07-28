"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubtaskListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubtaskWhereInput_1 = require("../inputs/SubtaskWhereInput");
let SubtaskListRelationFilter = class SubtaskListRelationFilter {
};
exports.SubtaskListRelationFilter = SubtaskListRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskWhereInput_1.SubtaskWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubtaskWhereInput_1.SubtaskWhereInput)
], SubtaskListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskWhereInput_1.SubtaskWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubtaskWhereInput_1.SubtaskWhereInput)
], SubtaskListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskWhereInput_1.SubtaskWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubtaskWhereInput_1.SubtaskWhereInput)
], SubtaskListRelationFilter.prototype, "none", void 0);
exports.SubtaskListRelationFilter = SubtaskListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("SubtaskListRelationFilter", {})
], SubtaskListRelationFilter);
