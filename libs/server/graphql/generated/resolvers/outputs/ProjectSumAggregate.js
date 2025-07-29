"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ProjectSumAggregate = class ProjectSumAggregate {
};
exports.ProjectSumAggregate = ProjectSumAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProjectSumAggregate.prototype, "percentComplete", void 0);
exports.ProjectSumAggregate = ProjectSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ProjectSumAggregate", {})
], ProjectSumAggregate);
