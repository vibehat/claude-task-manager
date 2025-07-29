"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamProjectCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TeamProjectCreateManyInput = class TeamProjectCreateManyInput {
};
exports.TeamProjectCreateManyInput = TeamProjectCreateManyInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamProjectCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TeamProjectCreateManyInput.prototype, "teamId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TeamProjectCreateManyInput.prototype, "projectId", void 0);
exports.TeamProjectCreateManyInput = TeamProjectCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamProjectCreateManyInput", {})
], TeamProjectCreateManyInput);
