"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamMemberCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TeamMemberCreateManyInput = class TeamMemberCreateManyInput {
};
exports.TeamMemberCreateManyInput = TeamMemberCreateManyInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamMemberCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TeamMemberCreateManyInput.prototype, "teamId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TeamMemberCreateManyInput.prototype, "userId", void 0);
exports.TeamMemberCreateManyInput = TeamMemberCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamMemberCreateManyInput", {})
], TeamMemberCreateManyInput);
