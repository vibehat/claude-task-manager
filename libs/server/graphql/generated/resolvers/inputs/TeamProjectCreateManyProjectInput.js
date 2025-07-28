"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamProjectCreateManyProjectInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TeamProjectCreateManyProjectInput = class TeamProjectCreateManyProjectInput {
};
exports.TeamProjectCreateManyProjectInput = TeamProjectCreateManyProjectInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamProjectCreateManyProjectInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TeamProjectCreateManyProjectInput.prototype, "teamId", void 0);
exports.TeamProjectCreateManyProjectInput = TeamProjectCreateManyProjectInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamProjectCreateManyProjectInput", {})
], TeamProjectCreateManyProjectInput);
