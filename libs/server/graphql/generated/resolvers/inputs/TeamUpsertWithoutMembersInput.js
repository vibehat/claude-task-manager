"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamUpsertWithoutMembersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamCreateWithoutMembersInput_1 = require("../inputs/TeamCreateWithoutMembersInput");
const TeamUpdateWithoutMembersInput_1 = require("../inputs/TeamUpdateWithoutMembersInput");
const TeamWhereInput_1 = require("../inputs/TeamWhereInput");
let TeamUpsertWithoutMembersInput = class TeamUpsertWithoutMembersInput {
};
exports.TeamUpsertWithoutMembersInput = TeamUpsertWithoutMembersInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamUpdateWithoutMembersInput_1.TeamUpdateWithoutMembersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamUpdateWithoutMembersInput_1.TeamUpdateWithoutMembersInput)
], TeamUpsertWithoutMembersInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamCreateWithoutMembersInput_1.TeamCreateWithoutMembersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamCreateWithoutMembersInput_1.TeamCreateWithoutMembersInput)
], TeamUpsertWithoutMembersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamWhereInput_1.TeamWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamWhereInput_1.TeamWhereInput)
], TeamUpsertWithoutMembersInput.prototype, "where", void 0);
exports.TeamUpsertWithoutMembersInput = TeamUpsertWithoutMembersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamUpsertWithoutMembersInput", {})
], TeamUpsertWithoutMembersInput);
