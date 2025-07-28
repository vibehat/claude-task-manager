"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamProjectCreateWithoutProjectInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamCreateNestedOneWithoutProjectsInput_1 = require("../inputs/TeamCreateNestedOneWithoutProjectsInput");
let TeamProjectCreateWithoutProjectInput = class TeamProjectCreateWithoutProjectInput {
};
exports.TeamProjectCreateWithoutProjectInput = TeamProjectCreateWithoutProjectInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamProjectCreateWithoutProjectInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamCreateNestedOneWithoutProjectsInput_1.TeamCreateNestedOneWithoutProjectsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamCreateNestedOneWithoutProjectsInput_1.TeamCreateNestedOneWithoutProjectsInput)
], TeamProjectCreateWithoutProjectInput.prototype, "team", void 0);
exports.TeamProjectCreateWithoutProjectInput = TeamProjectCreateWithoutProjectInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamProjectCreateWithoutProjectInput", {})
], TeamProjectCreateWithoutProjectInput);
