"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamProjectUpdateWithWhereUniqueWithoutProjectInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamProjectUpdateWithoutProjectInput_1 = require("../inputs/TeamProjectUpdateWithoutProjectInput");
const TeamProjectWhereUniqueInput_1 = require("../inputs/TeamProjectWhereUniqueInput");
let TeamProjectUpdateWithWhereUniqueWithoutProjectInput = class TeamProjectUpdateWithWhereUniqueWithoutProjectInput {
};
exports.TeamProjectUpdateWithWhereUniqueWithoutProjectInput = TeamProjectUpdateWithWhereUniqueWithoutProjectInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamProjectWhereUniqueInput_1.TeamProjectWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamProjectWhereUniqueInput_1.TeamProjectWhereUniqueInput)
], TeamProjectUpdateWithWhereUniqueWithoutProjectInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamProjectUpdateWithoutProjectInput_1.TeamProjectUpdateWithoutProjectInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamProjectUpdateWithoutProjectInput_1.TeamProjectUpdateWithoutProjectInput)
], TeamProjectUpdateWithWhereUniqueWithoutProjectInput.prototype, "data", void 0);
exports.TeamProjectUpdateWithWhereUniqueWithoutProjectInput = TeamProjectUpdateWithWhereUniqueWithoutProjectInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamProjectUpdateWithWhereUniqueWithoutProjectInput", {})
], TeamProjectUpdateWithWhereUniqueWithoutProjectInput);
