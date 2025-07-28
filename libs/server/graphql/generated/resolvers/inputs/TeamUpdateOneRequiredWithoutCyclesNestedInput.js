"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamUpdateOneRequiredWithoutCyclesNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamCreateOrConnectWithoutCyclesInput_1 = require("../inputs/TeamCreateOrConnectWithoutCyclesInput");
const TeamCreateWithoutCyclesInput_1 = require("../inputs/TeamCreateWithoutCyclesInput");
const TeamUpdateToOneWithWhereWithoutCyclesInput_1 = require("../inputs/TeamUpdateToOneWithWhereWithoutCyclesInput");
const TeamUpsertWithoutCyclesInput_1 = require("../inputs/TeamUpsertWithoutCyclesInput");
const TeamWhereUniqueInput_1 = require("../inputs/TeamWhereUniqueInput");
let TeamUpdateOneRequiredWithoutCyclesNestedInput = class TeamUpdateOneRequiredWithoutCyclesNestedInput {
};
exports.TeamUpdateOneRequiredWithoutCyclesNestedInput = TeamUpdateOneRequiredWithoutCyclesNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamCreateWithoutCyclesInput_1.TeamCreateWithoutCyclesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamCreateWithoutCyclesInput_1.TeamCreateWithoutCyclesInput)
], TeamUpdateOneRequiredWithoutCyclesNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamCreateOrConnectWithoutCyclesInput_1.TeamCreateOrConnectWithoutCyclesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamCreateOrConnectWithoutCyclesInput_1.TeamCreateOrConnectWithoutCyclesInput)
], TeamUpdateOneRequiredWithoutCyclesNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamUpsertWithoutCyclesInput_1.TeamUpsertWithoutCyclesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamUpsertWithoutCyclesInput_1.TeamUpsertWithoutCyclesInput)
], TeamUpdateOneRequiredWithoutCyclesNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamWhereUniqueInput_1.TeamWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamWhereUniqueInput_1.TeamWhereUniqueInput)
], TeamUpdateOneRequiredWithoutCyclesNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamUpdateToOneWithWhereWithoutCyclesInput_1.TeamUpdateToOneWithWhereWithoutCyclesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamUpdateToOneWithWhereWithoutCyclesInput_1.TeamUpdateToOneWithWhereWithoutCyclesInput)
], TeamUpdateOneRequiredWithoutCyclesNestedInput.prototype, "update", void 0);
exports.TeamUpdateOneRequiredWithoutCyclesNestedInput = TeamUpdateOneRequiredWithoutCyclesNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamUpdateOneRequiredWithoutCyclesNestedInput", {})
], TeamUpdateOneRequiredWithoutCyclesNestedInput);
