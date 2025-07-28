"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamUpsertWithoutProjectsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamCreateWithoutProjectsInput_1 = require("../inputs/TeamCreateWithoutProjectsInput");
const TeamUpdateWithoutProjectsInput_1 = require("../inputs/TeamUpdateWithoutProjectsInput");
const TeamWhereInput_1 = require("../inputs/TeamWhereInput");
let TeamUpsertWithoutProjectsInput = class TeamUpsertWithoutProjectsInput {
};
exports.TeamUpsertWithoutProjectsInput = TeamUpsertWithoutProjectsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamUpdateWithoutProjectsInput_1.TeamUpdateWithoutProjectsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamUpdateWithoutProjectsInput_1.TeamUpdateWithoutProjectsInput)
], TeamUpsertWithoutProjectsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamCreateWithoutProjectsInput_1.TeamCreateWithoutProjectsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamCreateWithoutProjectsInput_1.TeamCreateWithoutProjectsInput)
], TeamUpsertWithoutProjectsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamWhereInput_1.TeamWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamWhereInput_1.TeamWhereInput)
], TeamUpsertWithoutProjectsInput.prototype, "where", void 0);
exports.TeamUpsertWithoutProjectsInput = TeamUpsertWithoutProjectsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamUpsertWithoutProjectsInput", {})
], TeamUpsertWithoutProjectsInput);
