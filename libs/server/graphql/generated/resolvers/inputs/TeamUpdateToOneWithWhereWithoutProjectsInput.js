"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamUpdateToOneWithWhereWithoutProjectsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamUpdateWithoutProjectsInput_1 = require("../inputs/TeamUpdateWithoutProjectsInput");
const TeamWhereInput_1 = require("../inputs/TeamWhereInput");
let TeamUpdateToOneWithWhereWithoutProjectsInput = class TeamUpdateToOneWithWhereWithoutProjectsInput {
};
exports.TeamUpdateToOneWithWhereWithoutProjectsInput = TeamUpdateToOneWithWhereWithoutProjectsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamWhereInput_1.TeamWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamWhereInput_1.TeamWhereInput)
], TeamUpdateToOneWithWhereWithoutProjectsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamUpdateWithoutProjectsInput_1.TeamUpdateWithoutProjectsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamUpdateWithoutProjectsInput_1.TeamUpdateWithoutProjectsInput)
], TeamUpdateToOneWithWhereWithoutProjectsInput.prototype, "data", void 0);
exports.TeamUpdateToOneWithWhereWithoutProjectsInput = TeamUpdateToOneWithWhereWithoutProjectsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamUpdateToOneWithWhereWithoutProjectsInput", {})
], TeamUpdateToOneWithWhereWithoutProjectsInput);
