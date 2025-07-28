"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamUpsertWithoutCyclesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamCreateWithoutCyclesInput_1 = require("../inputs/TeamCreateWithoutCyclesInput");
const TeamUpdateWithoutCyclesInput_1 = require("../inputs/TeamUpdateWithoutCyclesInput");
const TeamWhereInput_1 = require("../inputs/TeamWhereInput");
let TeamUpsertWithoutCyclesInput = class TeamUpsertWithoutCyclesInput {
};
exports.TeamUpsertWithoutCyclesInput = TeamUpsertWithoutCyclesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamUpdateWithoutCyclesInput_1.TeamUpdateWithoutCyclesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamUpdateWithoutCyclesInput_1.TeamUpdateWithoutCyclesInput)
], TeamUpsertWithoutCyclesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamCreateWithoutCyclesInput_1.TeamCreateWithoutCyclesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamCreateWithoutCyclesInput_1.TeamCreateWithoutCyclesInput)
], TeamUpsertWithoutCyclesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamWhereInput_1.TeamWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamWhereInput_1.TeamWhereInput)
], TeamUpsertWithoutCyclesInput.prototype, "where", void 0);
exports.TeamUpsertWithoutCyclesInput = TeamUpsertWithoutCyclesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamUpsertWithoutCyclesInput", {})
], TeamUpsertWithoutCyclesInput);
