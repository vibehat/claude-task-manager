"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ProjectAvgAggregate = class ProjectAvgAggregate {
};
exports.ProjectAvgAggregate = ProjectAvgAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProjectAvgAggregate.prototype, "percentComplete", void 0);
exports.ProjectAvgAggregate = ProjectAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ProjectAvgAggregate", {})
], ProjectAvgAggregate);
