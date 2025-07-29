"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamProjectUpsertWithWhereUniqueWithoutProjectInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamProjectCreateWithoutProjectInput_1 = require("../inputs/TeamProjectCreateWithoutProjectInput");
const TeamProjectUpdateWithoutProjectInput_1 = require("../inputs/TeamProjectUpdateWithoutProjectInput");
const TeamProjectWhereUniqueInput_1 = require("../inputs/TeamProjectWhereUniqueInput");
let TeamProjectUpsertWithWhereUniqueWithoutProjectInput = class TeamProjectUpsertWithWhereUniqueWithoutProjectInput {
};
exports.TeamProjectUpsertWithWhereUniqueWithoutProjectInput = TeamProjectUpsertWithWhereUniqueWithoutProjectInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamProjectWhereUniqueInput_1.TeamProjectWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamProjectWhereUniqueInput_1.TeamProjectWhereUniqueInput)
], TeamProjectUpsertWithWhereUniqueWithoutProjectInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamProjectUpdateWithoutProjectInput_1.TeamProjectUpdateWithoutProjectInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamProjectUpdateWithoutProjectInput_1.TeamProjectUpdateWithoutProjectInput)
], TeamProjectUpsertWithWhereUniqueWithoutProjectInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamProjectCreateWithoutProjectInput_1.TeamProjectCreateWithoutProjectInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamProjectCreateWithoutProjectInput_1.TeamProjectCreateWithoutProjectInput)
], TeamProjectUpsertWithWhereUniqueWithoutProjectInput.prototype, "create", void 0);
exports.TeamProjectUpsertWithWhereUniqueWithoutProjectInput = TeamProjectUpsertWithWhereUniqueWithoutProjectInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamProjectUpsertWithWhereUniqueWithoutProjectInput", {})
], TeamProjectUpsertWithWhereUniqueWithoutProjectInput);
