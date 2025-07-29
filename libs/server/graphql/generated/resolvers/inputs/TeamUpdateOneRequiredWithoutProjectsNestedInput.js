"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamUpdateOneRequiredWithoutProjectsNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamCreateOrConnectWithoutProjectsInput_1 = require("../inputs/TeamCreateOrConnectWithoutProjectsInput");
const TeamCreateWithoutProjectsInput_1 = require("../inputs/TeamCreateWithoutProjectsInput");
const TeamUpdateToOneWithWhereWithoutProjectsInput_1 = require("../inputs/TeamUpdateToOneWithWhereWithoutProjectsInput");
const TeamUpsertWithoutProjectsInput_1 = require("../inputs/TeamUpsertWithoutProjectsInput");
const TeamWhereUniqueInput_1 = require("../inputs/TeamWhereUniqueInput");
let TeamUpdateOneRequiredWithoutProjectsNestedInput = class TeamUpdateOneRequiredWithoutProjectsNestedInput {
};
exports.TeamUpdateOneRequiredWithoutProjectsNestedInput = TeamUpdateOneRequiredWithoutProjectsNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamCreateWithoutProjectsInput_1.TeamCreateWithoutProjectsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamCreateWithoutProjectsInput_1.TeamCreateWithoutProjectsInput)
], TeamUpdateOneRequiredWithoutProjectsNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamCreateOrConnectWithoutProjectsInput_1.TeamCreateOrConnectWithoutProjectsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamCreateOrConnectWithoutProjectsInput_1.TeamCreateOrConnectWithoutProjectsInput)
], TeamUpdateOneRequiredWithoutProjectsNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamUpsertWithoutProjectsInput_1.TeamUpsertWithoutProjectsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamUpsertWithoutProjectsInput_1.TeamUpsertWithoutProjectsInput)
], TeamUpdateOneRequiredWithoutProjectsNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamWhereUniqueInput_1.TeamWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamWhereUniqueInput_1.TeamWhereUniqueInput)
], TeamUpdateOneRequiredWithoutProjectsNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamUpdateToOneWithWhereWithoutProjectsInput_1.TeamUpdateToOneWithWhereWithoutProjectsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamUpdateToOneWithWhereWithoutProjectsInput_1.TeamUpdateToOneWithWhereWithoutProjectsInput)
], TeamUpdateOneRequiredWithoutProjectsNestedInput.prototype, "update", void 0);
exports.TeamUpdateOneRequiredWithoutProjectsNestedInput = TeamUpdateOneRequiredWithoutProjectsNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamUpdateOneRequiredWithoutProjectsNestedInput", {})
], TeamUpdateOneRequiredWithoutProjectsNestedInput);
