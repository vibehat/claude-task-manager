"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamUpdateOneRequiredWithoutMembersNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamCreateOrConnectWithoutMembersInput_1 = require("../inputs/TeamCreateOrConnectWithoutMembersInput");
const TeamCreateWithoutMembersInput_1 = require("../inputs/TeamCreateWithoutMembersInput");
const TeamUpdateToOneWithWhereWithoutMembersInput_1 = require("../inputs/TeamUpdateToOneWithWhereWithoutMembersInput");
const TeamUpsertWithoutMembersInput_1 = require("../inputs/TeamUpsertWithoutMembersInput");
const TeamWhereUniqueInput_1 = require("../inputs/TeamWhereUniqueInput");
let TeamUpdateOneRequiredWithoutMembersNestedInput = class TeamUpdateOneRequiredWithoutMembersNestedInput {
};
exports.TeamUpdateOneRequiredWithoutMembersNestedInput = TeamUpdateOneRequiredWithoutMembersNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamCreateWithoutMembersInput_1.TeamCreateWithoutMembersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamCreateWithoutMembersInput_1.TeamCreateWithoutMembersInput)
], TeamUpdateOneRequiredWithoutMembersNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamCreateOrConnectWithoutMembersInput_1.TeamCreateOrConnectWithoutMembersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamCreateOrConnectWithoutMembersInput_1.TeamCreateOrConnectWithoutMembersInput)
], TeamUpdateOneRequiredWithoutMembersNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamUpsertWithoutMembersInput_1.TeamUpsertWithoutMembersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamUpsertWithoutMembersInput_1.TeamUpsertWithoutMembersInput)
], TeamUpdateOneRequiredWithoutMembersNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamWhereUniqueInput_1.TeamWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamWhereUniqueInput_1.TeamWhereUniqueInput)
], TeamUpdateOneRequiredWithoutMembersNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamUpdateToOneWithWhereWithoutMembersInput_1.TeamUpdateToOneWithWhereWithoutMembersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamUpdateToOneWithWhereWithoutMembersInput_1.TeamUpdateToOneWithWhereWithoutMembersInput)
], TeamUpdateOneRequiredWithoutMembersNestedInput.prototype, "update", void 0);
exports.TeamUpdateOneRequiredWithoutMembersNestedInput = TeamUpdateOneRequiredWithoutMembersNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamUpdateOneRequiredWithoutMembersNestedInput", {})
], TeamUpdateOneRequiredWithoutMembersNestedInput);
