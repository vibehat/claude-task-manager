"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAndReturnTeamMember = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Team_1 = require("../../models/Team");
const User_1 = require("../../models/User");
let CreateManyAndReturnTeamMember = class CreateManyAndReturnTeamMember {
};
exports.CreateManyAndReturnTeamMember = CreateManyAndReturnTeamMember;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyAndReturnTeamMember.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyAndReturnTeamMember.prototype, "teamId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyAndReturnTeamMember.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Team_1.Team, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Team_1.Team)
], CreateManyAndReturnTeamMember.prototype, "team", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => User_1.User, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", User_1.User)
], CreateManyAndReturnTeamMember.prototype, "user", void 0);
exports.CreateManyAndReturnTeamMember = CreateManyAndReturnTeamMember = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CreateManyAndReturnTeamMember", {})
], CreateManyAndReturnTeamMember);
