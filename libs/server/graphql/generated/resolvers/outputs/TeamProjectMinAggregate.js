"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamProjectMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TeamProjectMinAggregate = class TeamProjectMinAggregate {
};
exports.TeamProjectMinAggregate = TeamProjectMinAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamProjectMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamProjectMinAggregate.prototype, "teamId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamProjectMinAggregate.prototype, "projectId", void 0);
exports.TeamProjectMinAggregate = TeamProjectMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TeamProjectMinAggregate", {})
], TeamProjectMinAggregate);
