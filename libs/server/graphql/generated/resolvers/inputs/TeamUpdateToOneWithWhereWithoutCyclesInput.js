"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamUpdateToOneWithWhereWithoutCyclesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamUpdateWithoutCyclesInput_1 = require("../inputs/TeamUpdateWithoutCyclesInput");
const TeamWhereInput_1 = require("../inputs/TeamWhereInput");
let TeamUpdateToOneWithWhereWithoutCyclesInput = class TeamUpdateToOneWithWhereWithoutCyclesInput {
};
exports.TeamUpdateToOneWithWhereWithoutCyclesInput = TeamUpdateToOneWithWhereWithoutCyclesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamWhereInput_1.TeamWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamWhereInput_1.TeamWhereInput)
], TeamUpdateToOneWithWhereWithoutCyclesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamUpdateWithoutCyclesInput_1.TeamUpdateWithoutCyclesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamUpdateWithoutCyclesInput_1.TeamUpdateWithoutCyclesInput)
], TeamUpdateToOneWithWhereWithoutCyclesInput.prototype, "data", void 0);
exports.TeamUpdateToOneWithWhereWithoutCyclesInput = TeamUpdateToOneWithWhereWithoutCyclesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamUpdateToOneWithWhereWithoutCyclesInput", {})
], TeamUpdateToOneWithWhereWithoutCyclesInput);
