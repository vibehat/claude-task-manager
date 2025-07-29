"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamUpdateToOneWithWhereWithoutMembersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamUpdateWithoutMembersInput_1 = require("../inputs/TeamUpdateWithoutMembersInput");
const TeamWhereInput_1 = require("../inputs/TeamWhereInput");
let TeamUpdateToOneWithWhereWithoutMembersInput = class TeamUpdateToOneWithWhereWithoutMembersInput {
};
exports.TeamUpdateToOneWithWhereWithoutMembersInput = TeamUpdateToOneWithWhereWithoutMembersInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamWhereInput_1.TeamWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamWhereInput_1.TeamWhereInput)
], TeamUpdateToOneWithWhereWithoutMembersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamUpdateWithoutMembersInput_1.TeamUpdateWithoutMembersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamUpdateWithoutMembersInput_1.TeamUpdateWithoutMembersInput)
], TeamUpdateToOneWithWhereWithoutMembersInput.prototype, "data", void 0);
exports.TeamUpdateToOneWithWhereWithoutMembersInput = TeamUpdateToOneWithWhereWithoutMembersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamUpdateToOneWithWhereWithoutMembersInput", {})
], TeamUpdateToOneWithWhereWithoutMembersInput);
