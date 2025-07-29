"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamProjectCreateManyProjectInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamProjectCreateManyProjectInput_1 = require("../inputs/TeamProjectCreateManyProjectInput");
let TeamProjectCreateManyProjectInputEnvelope = class TeamProjectCreateManyProjectInputEnvelope {
};
exports.TeamProjectCreateManyProjectInputEnvelope = TeamProjectCreateManyProjectInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamProjectCreateManyProjectInput_1.TeamProjectCreateManyProjectInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], TeamProjectCreateManyProjectInputEnvelope.prototype, "data", void 0);
exports.TeamProjectCreateManyProjectInputEnvelope = TeamProjectCreateManyProjectInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamProjectCreateManyProjectInputEnvelope", {})
], TeamProjectCreateManyProjectInputEnvelope);
