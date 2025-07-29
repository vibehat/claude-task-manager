"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamProjectUpdateManyWithWhereWithoutProjectInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamProjectScalarWhereInput_1 = require("../inputs/TeamProjectScalarWhereInput");
const TeamProjectUpdateManyMutationInput_1 = require("../inputs/TeamProjectUpdateManyMutationInput");
let TeamProjectUpdateManyWithWhereWithoutProjectInput = class TeamProjectUpdateManyWithWhereWithoutProjectInput {
};
exports.TeamProjectUpdateManyWithWhereWithoutProjectInput = TeamProjectUpdateManyWithWhereWithoutProjectInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamProjectScalarWhereInput_1.TeamProjectScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamProjectScalarWhereInput_1.TeamProjectScalarWhereInput)
], TeamProjectUpdateManyWithWhereWithoutProjectInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamProjectUpdateManyMutationInput_1.TeamProjectUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamProjectUpdateManyMutationInput_1.TeamProjectUpdateManyMutationInput)
], TeamProjectUpdateManyWithWhereWithoutProjectInput.prototype, "data", void 0);
exports.TeamProjectUpdateManyWithWhereWithoutProjectInput = TeamProjectUpdateManyWithWhereWithoutProjectInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamProjectUpdateManyWithWhereWithoutProjectInput", {})
], TeamProjectUpdateManyWithWhereWithoutProjectInput);
